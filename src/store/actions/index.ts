export {
  setRegistrationIsCompleted,
  SET_REGISTRATION_IS_COMPLETED,
  setStatus,
  SET_STATUS,
} from 'store/actions/registrationAction';

export { setIsLoginAC, SET_IS_LOGIN } from './loginAction';

export {
  setErrorMessage,
  initializeMe,
  INITIALIZE_ME,
  SET_ERROR_MESSAGE,
} from './appAction';

export {
  changePersonalAvatarAC,
  changePersonalNameAC,
  editProfileAC,
  authMeAC,
  CHANGE_NAME,
  CHANGE_PERSONAL_DATA,
  CHECK_AUTH,
  CHANGE_AVATAR,
} from './profileAction';

export {
  setPacksAC,
  SET_PACKS,
  setSortPacks,
  SET_SORT_PACKS,
  setSearchPack,
  SET_SEARCH_PACK,
  setPageCountPacksAC,
  SET_PAGE_COUNT_PACKS,
  setCurrentPagePacksAC,
  SET_CURRENT_PAGE_PACKS,
  setIsMyPack,
  SET_IS_MY_PACK,
  rerenderPackAC,
  RERENDER_PACK,
  setMaxCardsCountAC,
  setMinCardsCountAC,
  SET_MAX_CARDS_COUNT,
  SET_MIN_CARDS_COUNT,
} from 'store/actions/packsAction';

export {
  SET_SEARCH_QUESTION_CARDS,
  SET_SORT_CARDS,
  SET_SEARCH_ANSWER_CARDS,
  setCards,
  setSearchAnswerCards,
  setSearchQuestionCards,
  setSortCards,
  SET_CARDS,
} from 'store/actions/cardsAction';

export {
  setAddModAC,
  setResultMessageAddPackAC,
  SET_RESULT_MESSAGE,
  SET_ADD_MOD,
} from './addPackAction';

export * from './type';
