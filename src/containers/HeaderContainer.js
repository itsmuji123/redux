import Header from '../components/Header'
import {connect} from 'react-redux'
const mapStateToProps=state=>({
    data:state
})
const mapDispatchToProps=dispatch=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)
// export default Home;