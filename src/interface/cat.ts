interface Run {
  (): void;
}

export default interface Cat {
  readonly name: string;
  readonly run: Run;
  getName?: () => void;
}