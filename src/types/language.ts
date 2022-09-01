export interface ILanguage {
  langCode: string;
  LangDescription: string;
}

export interface ILanguages {
  defaultLang: string;
  languages: ILanguage[];
}
