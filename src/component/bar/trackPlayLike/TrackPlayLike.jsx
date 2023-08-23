import { useDispatch, useSelector } from 'react-redux'
import * as S from './TrackPlayLike.Styles'
import { getSetTrack } from '../../../store/selectors/tracksSelectors'
import { postLike, deleteLike } from '../../../api'
import { setTrack } from '../../../store/actions/creators/tracksCreators'
import { useUser } from '../../../context/user'



export function TrackPlayLike() {

  const dispatch = useDispatch()

  const selectedTrack = useSelector(getSetTrack)
  const setCurrentTrack = (el) => dispatch(setTrack(el))
  const user = useUser()
  const isLiked = !!selectedTrack?.stared_user?.find((item) => item.id === user.id)

  async function like() {
    if (!isLiked) {
      await postLike(selectedTrack.id)
      console.log("like");
      const newUsers = selectedTrack.stared_user
      newUsers.push(user)
      setCurrentTrack({ ...selectedTrack, stared_user: newUsers })
    } else {
      await deleteLike(selectedTrack.id)
      const newUsers = selectedTrack.stared_user
      const index = newUsers?.findIndex((item) => item.id === user.id);
      if (index > -1) newUsers.splice(index, 1);
      setCurrentTrack({ ...selectedTrack, stared_user: newUsers })
    }
  }

  return (
    <S.TrackPlayLikeDis>
      <S.TrackPlayLike>
        <S.TrackPlayLikeSvg alt="like" onClick={like} style={{ fill: isLiked ? "rgba(255, 255, 255, 1)" : "rgba(105, 105, 105, 1)" }}>
          <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
        </S.TrackPlayLikeSvg>
      </S.TrackPlayLike>
    </S.TrackPlayLikeDis>
  )
}
