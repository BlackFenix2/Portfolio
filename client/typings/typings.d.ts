declare module '*.mp3' {
  const audio: any;
  export default audio;
}

declare module '*.json' {
  const json: any;
  export default json;
}

declare module '*.png' {
  const image: any;
  export default image;
}
//load CSS modules
declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
