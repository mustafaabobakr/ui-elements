type ArrayElementType<ArrayType extends unknown[]> = ArrayType[number];

export class ElementUtil {
  static getElementPropertyValue(element: Element, property: string): string {
    if (element && property) {
      const style = window.getComputedStyle(element);
      if (style) return style.getPropertyValue(property);
    }
    return '';
  }

  static getElementPropertyValues<T extends string[]>(
    element: Element,
    properties: T
  ): { [key in ArrayElementType<T>]: string } {
    if (element && properties) {
      const style = window.getComputedStyle(element);
      if (style) {
        // use js reduce to create an object with the properties as keys and the values as returned value
        const output = properties.reduce((acc, property) => {
          acc[property as ArrayElementType<T>] =
            style.getPropertyValue(property);
          return acc;
        }, {} as { [key in ArrayElementType<T>]: string });

        return output;
      }
    }
    return {} as { [key in ArrayElementType<T>]: string };
  }
}
