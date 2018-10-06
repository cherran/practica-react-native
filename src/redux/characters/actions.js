import * as types from './types'
import { Actions } from 'react-native-router-flux'

function setFetching(value) {
    return {
        type: types.CHARACTERS_SET_FETCHING,
        value: value,
    }
}

export function setList(value) {
    return {
        type: types.CHARACTERS_UPDATE_LIST,
        value,
    }
}

export function setItem(value) {
    return {
        type: types.CHARACTERS_SET_ITEM,
        value,
    }
}

export function fetchCharacters() {
    return (dispatch, getState, api) => {

        dispatch(setList([]))
        dispatch(setFetching(true))
        
        api
            .fetchCharacters()
            .then( res => {
                dispatch(setFetching(false))
                dispatch(setList(res.data.records))
            }).catch( err => {
                dispatch(setFetching(false))
                console.log("[fetchCharacters] ❌❌❌ Error ❌❌❌ \n", err)
            })

    }
}

export function saveCharacter(data) {
    return (dispatch, getState, api) => {

        dispatch(setFetching(true))

        const characterData = {
            ...data
        }

        // Doing nothinkg here yet
        console.log("[saveCharacter] Character saved ✅")
    }
}