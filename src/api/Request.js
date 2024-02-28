import { showDanger } from 'components/nudges/Alert';
import { RemoveLocalData, SERVER_URL, getAppToken } from 'helper/utils';
import { dispatch } from 'store/index';
import { updateAuth } from 'store/reducers/auth';
import {useNavigate} from 'react-router-dom'


const makeRequest = async ({ method = 'GET', url, params, body }) => {
  console.log('url ===>', url);
  try {
    const config = {
      method: method.toUpperCase(),
      mode: 'cors',
      headers: {
        // " Access-Control-Allow-Origin": '*',
        'Content-Type': 'application/json'
        //  " Access-Control-Allow-Origin": '*'
      }
    };

    config.headers['apptoken'] = `${await getAppToken()}`;
    let serverUrl = SERVER_URL();
    let url_with_params = `${serverUrl}${url}`;
    if (params) {
      const encoded_params = await serializeQuery(params);
      url_with_params += encoded_params;
    }
    if (body) {
      config.headers.body = JSON.stringify(body);
    }

    console.log('url_with_params ===>', url_with_params, method);
    console.log('headers ===>', config);

    const response = await fetch(url_with_params, config);
    console.log('Response Status:', response);

    // console.log("response of api",response.text());
    const result = await response.json();
    console.log('Response Body:', result);

    if (result) {
      if (result?.toString()?.startsWith('<')) {
        alert(`Application Error due to ${url}`);
      } else if (result?.error) {
        if (result.error.code == 525) {
          showDanger('Token Expired');
          await RemoveLocalData();
          dispatch(updateAuth({ status: false }));
          // navigate('/login');
        } else {
          showDanger(`${url} -> ${result?.error?.message}`);
        }
      } else {
        if (result?.statusCode != null) {
          if (result?.statusCode == 200) {
            return result;
          } else if (result?.statusCode == 500) {
            console.error(`Error in Api ${url} ==>Error message is : ${result.message}`);
          } else {
            return result;
          }
        }
      }
    }
  } catch (err) {
    alert(`${url} : ${err}`);
    console.error(`Error in API ${url} : ${err}`);
    return null;
  }
};

const makeRequestWithoutLogin = async ({ method = 'GET', url, params, body }) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      method: method.toUpperCase(),
      mode: 'cors'
    };
    let url_with_params = `${SERVER_URL()}${url}`;

    if (params) {
      const encoded_params = await serializeQuery(params);
      url_with_params += encoded_params;
    }
    console.log('url_with_params==', url_with_params);

    if (body) {
      headers['body'] = JSON.stringify(body);
    }

    const response = await fetch(url_with_params, headers);

    const result = await response.json();

    if (result) {
      if (result?.toString()?.startsWith('<')) {
        alert(`Application Error due to ${url}`);
      } else if (result?.error) {
        if (result.error.code == 525) {
          await RemoveLocalData();
          window.location.pathname('/login');
          showDanger('Token Expired');
        } else {
          showDanger(`${url} --> ${result?.error?.message}`);
        }
      } else {
        if (result?.statusCode != null) {
          if (result?.statusCode == 200) {
            return result;
          } else if (result?.statusCode == 500) {
            window.location.pathname('/error', {
              message: `Error in ${url} : ${result.message}`
            });
            console.error(`Error in Api ${url} ==>Error message is : ${result.message}`);
          } else {
            return result;
          }
        }
      }
    }
  } catch (err) {
    // showDanger(`${url} : ${err}`)
    console.error(`Error in API ${url} : ${err}`);
    return null;
  }
};

const serializeQuery = async (query) => {
  return Object.keys(query)
    .map((key, index) => {
      const separator = index === 0 ? '?' : '&';
      return `${separator}${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`;
    })
    .join('');
};

export { makeRequest, makeRequestWithoutLogin,serializeQuery};
