import { IResponseEntity } from "./ResponseEntity";

interface ISuggest {
  value: string;
  label: string;
}

interface ISuggestionData {
  clarity: ISuggest[];
  color: ISuggest[];
  comment: ISuggest[];
  cut: ISuggest[];
  object_name: ISuggest[];
  origin: ISuggest[];
  shape: ISuggest[];
  transparency: ISuggest[];
}

export interface ISuggestionsState {
  isLoading: boolean;
  data: ISuggestionData;
}

export interface ISuggestionResponse
  extends IResponseEntity<ISuggestionData> {}
