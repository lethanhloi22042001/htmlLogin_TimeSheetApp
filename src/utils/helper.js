// chứa cá fn hay dùng đi dùng lại ?
 
export const payloadCreator = (asynFunc) => async (arg, thunkApi) => {
  try {
    const res = await asynFunc(arg);
    return res;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
};

 
 
 