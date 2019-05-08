import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Create extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className='col-md-3'>
        <form className="form-block">
          <div className="form-group">
            <label for="exampleInputEmail3">用户编号</label>
            <input type="email" className="form-control" id="exampleInputEmail3" placeholder="id" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword3">用户姓名</label>
            <input type="password" className="form-control" id="exampleInputPassword3" placeholder="username" />
          </div>
          <button type="submit" className="btn btn-warning">添加</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)