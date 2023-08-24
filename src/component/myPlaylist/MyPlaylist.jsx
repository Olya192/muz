import { setPlaylist, setLoading, setError } from '../../store/actions/creators/tracksCreators'
import { TrackList } from '../trackList/TrackList'
import { useDispatch} from 'react-redux'
import * as S from './MiPlaylist.Styles'
import { getFavTrack } from '../../api'
import { useEffect } from 'react'


export function MyPlaylist() {

  const dispatch = useDispatch()
  const setItems = (el) => dispatch(setPlaylist(el))

  const changeLoading = (el) => dispatch(setLoading(el))
  const setAddTodoError = (el) => dispatch(setError(el))

  useEffect(() => {
    changeLoading(true)
    setAddTodoError(false)
    getFavTrack()
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
      title={`Треки`}
    />
  )
}


