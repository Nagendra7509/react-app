import React from 'react'
import { observable, action } from 'mobx'
import { Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { getAccessToken } from '../../utils/StorageUtils'
import {
   API_FAILED,
   API_FETCHING,
   API_SUCCESS,
   API_INITIAL,
} from '@ib/api-constants'

import { ThemeContext } from '../../../../context/EcommerceAppContext'

import {
   SignInPageDiv,
   SignInForm,
   SignInText,
   UserName,
   Password,
   SignInBtn,
   ErrorMessage,
} from './styledComponent'

const Display = (props) => {
   //console.log(typeof props);
   return <div>{props.children}</div>
}

// @inject("authStore")
@observer
class SignInPage extends React.Component {
   // userNameRef = React.createRef();
   // passwordRef = React.createRef();

   componentDidMount() {
      //this.userNameRef.current.focus();
   }

   //ref={this.userNameRef}
   //ref={this.passwordRef}

   render() {
      if (getAccessToken()) {
         return <Redirect to={{ pathname: '/ecommerce-store/products/' }} />
      }
      const {
         username,
         onChangeUsername,
         password,
         onChangePassword,
         onClickSignIn,
         errorMessage,
         getUserSignInAPIStatus,
      } = this.props

      return (
         <SignInPageDiv>
            <SignInForm>
               <SignInText>Sign in</SignInText>
               <UserName
                  onChange={onChangeUsername}
                  value={username}
                  type='text'
                  placeholder='Username'
               />
               <Password
                  onChange={onChangePassword}
                  value={password}
                  type='password'
                  placeholder='Password'
               />
               <SignInBtn
                  type='button'
                  onClick={onClickSignIn}
                  data-testid='sign-in-button'
                  disabled={getUserSignInAPIStatus == API_FETCHING}
                  opacityValue={getUserSignInAPIStatus == API_FETCHING}
               >
                  {getUserSignInAPIStatus == API_FETCHING
                     ? 'Loading....'
                     : 'Sign in'}
               </SignInBtn>
               <ErrorMessage>{errorMessage}</ErrorMessage>
            </SignInForm>
            {/*<Display>wefgerer</Display>*/}
         </SignInPageDiv>
      )
   }
}

export default SignInPage
