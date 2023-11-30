/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as z from 'zod';
import { ZodRawShape } from 'zod';
import { CMSInputType, InputGlobal } from '@mono/types';
import { URLUtils } from '@mono/utils';
import { useMemo } from 'react';

const useContactForm = (inputs: CMSInputType[]) => {
  // create a schema from the inputs coming from the CMS,
  // so that we can validate the form, with names as keys.
  const schemaFromCMS = useMemo(
    () =>
      inputs.reduce((acc, curr) => {
        acc[curr.name] = {
          ...curr,
        };
        return acc;
      }, {} as Record<string, CMSInputType>),
    [inputs]
  );

  const inputNames = Object.keys(schemaFromCMS);
  // map over schemaFromCMS and create a zod schema
  const schema = useMemo(
    () =>
      inputNames.reduce((acc, curr) => {
        const currentInput = schemaFromCMS[curr];
        const isRequired = currentInput.required;
        const hasWhen = currentInput.when !== null;
        //
        const isDropdownField =
          currentInput['__component'] === 'components.dropdown';
        const isCheckboxField =
          currentInput['__component'] === 'components.checkbox';
        //
        const isInputField = currentInput['__component'] === 'components.input';
        const isPhoneInputField =
          currentInput['__component'] === 'components.phone-input';
        const type = isInputField && (currentInput.type as InputGlobal['type']);
        //
        const errorMessageFromCMS = isInputField
          ? currentInput.error_msg
          : null;

        let errorMessageToRender = errorMessageFromCMS as string;
        if (!errorMessageFromCMS) {
          errorMessageToRender = `Invalid Input!`;
        }

        if (isDropdownField) {
          const errorMessageToRender = `Invalid Input!`;
          // add required if isRequired is true
          if (isRequired) {
            acc[curr] = z
              .string({
                required_error: errorMessageToRender,
                invalid_type_error: errorMessageToRender,
              })
              .default(currentInput.default_value ?? '');
          }
          // add optional if isRequired is false
          if (!isRequired) {
            acc[curr] = z
              .string()
              .optional()
              .default(currentInput.default_value ?? '');
          }
        }

        if (isCheckboxField) {
          const errorMessageToRender = `Invalid Input!`;
          // add required if isRequired is true
          if (isRequired) {
            acc[curr] = z.boolean({
              required_error: errorMessageToRender,
              invalid_type_error: errorMessageToRender,
            });
          }
          // add optional if isRequired is false
          if (!isRequired) {
            acc[curr] = z.boolean().optional().default(false);
          }
        }

        if (isPhoneInputField) {
          // add required if isRequired is true
          if (isRequired) {
            acc[curr] = z
              .string({
                required_error: errorMessageToRender,
                invalid_type_error: errorMessageToRender,
              })
              .nonempty({ message: errorMessageToRender });
          }
          // add optional if isRequired is false
          if (!isRequired) {
            acc[curr] = z
              .string()
              .optional()
              .or(z.literal(''))
              .default(currentInput.default_value ?? '');
          }
        }
        if (type === 'text') {
          // add required if isRequired is true
          if (isRequired) {
            acc[curr] = z
              .string({
                required_error: errorMessageToRender,
                invalid_type_error: errorMessageToRender,
              })
              .min(1, { message: errorMessageToRender })
              .default(currentInput.default_value ?? '');
          }
          // add optional if isRequired is false
          if (!isRequired) {
            acc[curr] = z
              .string()
              .optional()
              .or(z.literal(''))
              .default(currentInput.default_value ?? '');
          }
        }

        if (type === 'url') {
          if (!errorMessageFromCMS) {
            errorMessageToRender = `Invalid URL!`;
          }

          // add required if isRequired is true
          if (isRequired) {
            acc[curr] = z
              .string({
                required_error: errorMessageToRender,
                invalid_type_error: errorMessageToRender,
              })
              .url({ message: errorMessageToRender })
              .refine(
                (val) => {
                  const isHttpUrl = URLUtils.checkHttpUrl(val);
                  return isHttpUrl;
                },
                { message: errorMessageToRender }
              )
              .default(currentInput.default_value ?? '');
          }
          // add optional if isRequired is false
          if (!isRequired) {
            acc[curr] = z
              .string()
              .url({
                message: errorMessageToRender,
              })
              .refine(
                (val) => {
                  if (val === '') {
                    return true;
                  }
                  const isHttpUrl = URLUtils.checkHttpUrl(val);
                  return isHttpUrl;
                },
                { message: errorMessageToRender }
              )

              .optional()
              .or(z.literal(''))
              .default(currentInput.default_value ?? '');
          }
        }

        if (type === 'email') {
          // add required if isRequired is true
          if (isRequired) {
            acc[curr] = z
              .string({
                required_error: errorMessageToRender,
                invalid_type_error: errorMessageToRender,
              })
              .email({ message: errorMessageToRender })
              .default(currentInput.default_value ?? '');
          }
          // add optional if isRequired is false
          if (!isRequired) {
            acc[curr] = z
              .string()
              .email()
              .optional()
              .or(z.literal(''))
              .default(currentInput.default_value ?? '');
          }
        }
        if (type === 'textarea') {
          // add required if isRequired is true
          if (isRequired) {
            acc[curr] = z
              .string({
                required_error: errorMessageToRender,
                invalid_type_error: errorMessageToRender,
              })
              .default(currentInput.default_value ?? '');
          }
          // add optional if isRequired is false
          if (!isRequired) {
            acc[curr] = z
              .string()
              .optional()
              .or(z.literal(''))
              .default(currentInput.default_value ?? '');
          }
        }

        return acc;
      }, {} as ZodRawShape),
    [inputNames, schemaFromCMS]
  );

  const zodSchema = z.object(schema);

  // get default values from the CMS to pass to React-Hook-Form
  const defaultValues = inputNames.reduce((acc, curr) => {
    const currentInput = schemaFromCMS[curr];
    const { name, default_value } = currentInput;
    if (default_value) {
      if (default_value === 'true' || default_value === 'false') {
        // Make sure to convert string coming from cms to boolean as expected by zod schema
        // @ts-ignore
        acc[name] = Boolean(default_value);
      } else {
        acc[name] = default_value ?? '';
      }
    }
    return acc;
  }, {} as Record<string, string>);

  return { zodSchema, defaultValues };
};

export default useContactForm;
