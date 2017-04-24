export function storeObject(key, obj) {
  if( storageAvailable('localStorage') ) {
  	localStorage.setItem(key, JSON.stringify(obj));
  	return true;
  } 
  return false;
}

export function getStoredObject(key) {
	if( storageAvailable('localStorage') ) {
		return JSON.parse(localStorage.getItem(key));
	}
	return false; 
}

export function removeStore(key) {
	localStorage.removeItem(key);
}

export function storageAvailable(type='localStorage') {
	try {
		var storage = window[type],
			x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
}
