import { connect } from 'react-redux'
import { isMoveViewFunc } from '../../redux/actionFunction'
import { Switch } from 'antd';
let ViewMoveCode = ({ ViewMovefunc, isViewMove }) => {
    const handleViewMove = () => {
        ViewMovefunc(!isViewMove)
    }

    return (
        <div className="leftView-bu-div" >
            <span>可视化</span>
            <Switch size="small" onClick={handleViewMove} />
        </div>
    )
}

const mapStateProps = (state, ownProps) => {
    return {
        isViewMove: state.isMoveView
    }
}
const mapDispatchProps = (dispatch, ownProps) => {
    return {
        ViewMovefunc: () => {
            dispatch(isMoveViewFunc())
        }
    }
}

export default ViewMoveCode = connect(
    mapStateProps,
    mapDispatchProps
)(ViewMoveCode)