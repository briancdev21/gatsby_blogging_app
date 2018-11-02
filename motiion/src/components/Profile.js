import React from 'react'

import { Facebook, Twitter, Linkedin } from '../images'
import { PaddingDiv, RobotoText, FlexContainer, FlexView, ProfileLogo, SocialIcon } from '../components'

const Profile = ({ title, userRole, content, profileLink }) => {
  return (
    <FlexContainer
      className={'profile'}
    >
      <FlexView size={2}>
        <ProfileLogo src={profileLink} />
      </FlexView>
      <FlexView className="content" size={10}>
        <RobotoText size={36} color={'#000'} weight={600}>
          {title}
        </RobotoText>
        <RobotoText size={16} color={'#000'} weight={500}>
          {userRole}
        </RobotoText>
        <PaddingDiv bottom={20} top={10}>
          <SocialIcon link={'#'} src={Facebook}/>
          <SocialIcon link={'#'} src={Twitter}/>
          <SocialIcon link={'#'} src={Linkedin}/>
        </PaddingDiv>
        <PaddingDiv bottom={80}>
          <RobotoText
            size={16}
            weight={300}
            color={'#000'}
            style={{ opacity: 0.8 }}
          >
            <div style={{ textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: content }} />
          </RobotoText>
        </PaddingDiv>
      </FlexView>
    </FlexContainer>
  )
}

export default Profile
