import { InputMode } from '@mono/types';
import { HTMLInputTypeAttribute } from 'react';

class InputUtils {
  static getCorrectInputMode(
    type: HTMLInputTypeAttribute | 'textarea'
  ): InputMode {
    switch (type) {
      case 'text':
      case 'textarea':
        return 'text';
      case 'email':
        return 'email';
      case 'number':
        return 'numeric';
      case 'tel':
      case 'phone':
        return 'tel';
      case 'url':
        return 'url';
      default:
        return 'text';
    }
  }

  /**
   Examples
   ```
    "name": "first_name" => autoComplete={'given-name'}
    "name": "last_name" => autoComplete={'family-name'}
    "name": "tel" => autoComplete={'tel'}
    "name": "email" => autoComplete={'email'}
    "name": "url" => autoComplete={'url'}
  ```

  */
  static getCorrectAutoComplete(
    type: HTMLInputTypeAttribute | 'textarea',
    name: string
  ): string {
    const isFirstName = name.includes('first');
    const isLastName = name.includes('last');

    switch (type) {
      case 'text':
        if (isFirstName) {
          return 'given-name';
        }
        if (isLastName) {
          return 'family-name';
        }
        return 'text';
      case 'email':
        return 'email';
      case 'number':
        return 'off';
      case 'tel':
      case 'phone':
        return 'tel';
      case 'url':
        return 'url';
      default:
        return 'on';
    }
  }

  static preventNonNumberInput(event: React.KeyboardEvent<HTMLInputElement>) {
    const { key } = event;
    // allow backspace to delete characters.
    if (key === 'Backspace' || key === 'Delete') {
      return;
    }
    // allow arrow keys to move cursor
    if (['ArrowLeft', 'ArrowRight'].includes(key)) {
      return;
    }
    // allow select all and edit or copy
    if (['Control', 'Meta', 'Alt', 'Shift'].includes(key)) {
      return;
    }
    // check is all text is selected
    const isAllTextSelected =
      event.currentTarget.selectionStart === 0 &&
      event.currentTarget.selectionEnd === event.currentTarget.value.length;
    if (isAllTextSelected) {
      return;
    }
    // prevent user from entering non-numbers
    if (isNaN(Number(key))) {
      event.preventDefault();
      return false;
    }
    return true;
  }
}

export default InputUtils;
