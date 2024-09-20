declare module "@stylexjs/stylex" {
  type Style = {
    [key: string]: string | number;
  };

  type Styles = {
    [key: string]: Style;
  };

  interface StyleX {
    create(styles: Styles): { [key: string]: string };
    (classNames: string | string[]): string;
  }

  const stylex: StyleX;
  export default stylex;
}
