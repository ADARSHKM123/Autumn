
import axios from 'axios';
import { Showalert } from './alert'

export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? '/api/v1/users/updateMyPassword'
        : '/api/v1/users/updateMe';

    const res = await axios({
      method: 'PATCH',
      url,
      data
    });

    if (res.data.status === 'success') {
      Showalert('success', `${type.toUpperCase()} updated successfully!`);
    }

  } catch (err) {
    console.log(err);
    Showalert('error', err.response.data.message);
  }

}


