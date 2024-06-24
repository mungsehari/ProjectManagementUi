export const initialState = {
  messages: [],
  loading: false,
  error: null,
  chat: null,
};

export const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MESSAGE_REQUEST":
    case "SEND_MESSAGE_REQUEST":
    case "FETCH_CHAT_MESSAGES_REQUEST":
    case "FETCH_CHAT_BY_PROJECT_REQUEST":
      return { ...state, loading: true, error: null };

    case "FETCH_MESSAGE_SUCCESS":
    case "FETCH_CHAT_MESSAGES_SUCCESS":
      return {
        ...state,
        loading: false,
        messages: action.messages,
      };

    case "SEND_MESSAGE_SUCCESS":
      return {
        ...state,
        loading: false,
        messages: [...state.messages, action.message],
      };

    case "FETCH_CHAT_BY_PROJECT_SUCCESS":
      return {
        ...state,
        loading: false,
        chat: action.chat,
      };

    case "FETCH_CHAT_PROJECT_FAILURE":
    case "FETCH_CHAT_MESSAGES_FAILURE":
    case "SEND_MESSAGE_FAILURE":
    case "FETCH_CHAT_BY_PROJECT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
