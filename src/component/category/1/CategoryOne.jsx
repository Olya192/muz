
import { setPlaylist, setLoading, setError } from '../../../store/actions/creators/tracksCreators'
import { TrackList } from '../../trackList/TrackList'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './CategoryOne.Styles'
import { useParams } from 'react-router-dom'
import { getCategoryTracks } from '../../../api'
import { useEffect } from 'react'

export function CategoryOne() {

  const params = useParams()

  const dispatch = useDispatch()
  const setItems = (el) => dispatch(setPlaylist(el))

  const changeLoading = (el) => dispatch(setLoading(el))
  const setAddTodoError = (el) => dispatch(setError(el))

  useEffect(() => {
    console.log(params);
    changeLoading(true)
    setAddTodoError(false)
    getCategoryTracks(params.id)
      .then((items) => {
        setItems(items)
        changeLoading(false)
      })
      .catch((error) => {
        setAddTodoError(error.message)
        changeLoading(false)
      })
  }, [])

  return (
    <TrackList
      title={params.id === '1' ? 'Плейлист дня' : params.id === '2' ? '100 танцевальных хитов' : 'Инди заряд'}
    />
  )
}


