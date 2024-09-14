const initState = {
  users: [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane hand" },
  ],
  post: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      // code block
      console.log(">>  check action type ", action);
      let userCopy = [...state.users];
      // Tìm vị trí của người dùng có id khớp với action.payload.id
      let updatedUsers = userCopy.filter(
        (item) => item.id !== action.payload.id
      );

      // Trả về state mới với danh sách users đã cập nhật
      return {
        ...state,
        users: updatedUsers,
      };
    case "CREATE_USER":
      let id = Math.floor(Math.random() * 1000);
      let user = { id: id, name: `random ${id}` };
      return {
        ...state,
        users: [...state.users, user], // copy state va ghi de user moi vaf state
      };
    default:
      return state;
  }
};

export default rootReducer;
