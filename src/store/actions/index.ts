export {
  setStatus,
  SET_STATUS,
  setRegistrationIsCompleted,
  SET_REGISTRATION_IS_COMPLETED,
} from 'store/actions/registrationAction';

export { setIsLoginAC, SET_IS_LOGIN } from './loginAction';

export {
  initializeMe,
  INITIALIZE_ME,
  setErrorMessage,
  SET_ERROR_MESSAGE,
} from './appAction';

export {
  authMeAC,
  CHECK_AUTH,
  CHANGE_NAME,
  CHANGE_AVATAR,
  editProfileAC,
  CHANGE_PERSONAL_DATA,
  changePersonalNameAC,
  changePersonalAvatarAC,
} from './profileAction';

export { changePasswordAC, IS_CHANGE_PASSWORD } from './passwordAction';

export {
  SET_PACKS,
  setPacksAC,
  setIsMyPack,
  setSortPacks,
  setSearchPack,
  RERENDER_PACK,
  rerenderPackAC,
  SET_IS_MY_PACK,
  SET_SORT_PACKS,
  SET_SEARCH_PACK,
  setMaxCardsCountAC,
  setMinCardsCountAC,
  SET_MAX_CARDS_COUNT,
  SET_MIN_CARDS_COUNT,
  setPageCountPacksAC,
  SET_PAGE_COUNT_PACKS,
  setCurrentPagePacksAC,
  SET_CURRENT_PAGE_PACKS,
  setLocalMinCardsCountAC,
  setLocalMaxCardsCountAC,
  SET_LOCAL_MAX_CARDS_COUNT,
  SET_LOCAL_MIN_CARDS_COUNT,
} from 'store/actions/packsAction';

export {
  setCards,
  SET_CARDS,
  setSortCards,
  RERENDER_CARD,
  rerenderCardAC,
  SET_SORT_CARDS,
  setPageCountCardsAC,
  setSearchAnswerCards,
  SET_PAGE_COUNT_CARDS,
  setCurrentPageCardsAC,
  setSearchQuestionCards,
  SET_CURRENT_PAGE_CARDS,
  SET_SEARCH_ANSWER_CARDS,
  SET_SEARCH_QUESTION_CARDS,
} from 'store/actions/cardsAction';

export {
  setAddModAC,
  SET_ADD_MOD,
  SET_RESULT_MESSAGE,
  setResultMessageAddPackAC,
} from './addPackAction';

export * from './type';
