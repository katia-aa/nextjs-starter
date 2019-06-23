import React from 'react'

/*
  Here customize 404 or 500 errors, or delete this file if you want Next to use the default.
  More info: https://nextjs.org/docs#custom-error-handling
*/


export default class Error extends React.Component {
  static getInitialProps ({ res, xhr }) {
    const statusCode = res ? res.statusCode : (xhr ? xhr.status : null)
    return { statusCode }
  }

  render () {
    return (
        <p>{
          this.props.statusCode
          ? `${this.props.statusCode} not found`
          : 'An error occurred on client'
        }</p>
      )
  }
}