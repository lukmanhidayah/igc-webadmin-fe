import { ISuggestionsState } from "@domain/entities/SuggestionEntity";
import SuggestionUseCase from "@domain/useCases/SuggestionUseCase";
import logger from "@lib/utils/logger";
import { SetStateAction } from "react";

class SuggestionViewModel {
  private suggestionUseCase: SuggestionUseCase;
  private setSuggestion: (value: SetStateAction<ISuggestionsState>) => void;

  constructor(
    suggestionUseCase: SuggestionUseCase,
    setSuggestion: (value: SetStateAction<ISuggestionsState>) => void
  ) {
    this.suggestionUseCase = suggestionUseCase;
    this.setSuggestion = setSuggestion;
  }

  async getSuggestion(token: string) {
    try {
      this.setSuggestion((prevState) => ({
        ...prevState,
        isLoading: true,
      }));

      const response = await this.suggestionUseCase.get({ token });

      logger("SuggestionViewModel.getSuggestion | response => ", response);

      if (response) {
        this.setSuggestion((prevState) => ({
          ...prevState,
          data: response.data,
        }));
      }

    } catch (error: any) {
      logger("SuggestionViewModel.getSuggestion | error => ", error);
      throw error;
    } finally {
      this.setSuggestion((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }
  }
}

export default SuggestionViewModel;
