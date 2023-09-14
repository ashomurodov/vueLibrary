export namespace IEntity {
  export namespace Book {
    export type List = Single[];
    export interface Single {
      id: number;
      title: string;
      image: string;
      description: string;
      authors: string[];
      buyLink: string;
      previewLink: string;
      publishDate: string;
    }
  }
}
