import React from 'react'
import PropTypes from 'prop-types'

import styles from './ContactLinks.module.css'

import MailIcon from '../../../images/mail.svg'
import TelegramIcon from '../../../images/telegram.svg'
import ViberIcon from '../../../images/viber.svg'
import WhatsupIcon from '../../../images/whatsapp.svg'
import VkIcon from '../../../images/vk.svg'

const ContactLinks = ({ email, telegram, viber, whatsup, vkontakte }) => {
  const links = [
    {
      link: 'mailto:' + email,
      label: email,
      icon: MailIcon
    },
    {
      link: telegram,
      label: 'Telegram',
      icon: TelegramIcon
    },
    {
      link: viber,
      label: 'Viber',
      icon: ViberIcon
    },
    {
      link: whatsup,
      label: 'WhatsApp',
      icon: WhatsupIcon
    },
    {
      link: vkontakte,
      label: 'Вконтакте',
      icon: VkIcon
    },
  ]
  return (
    <ul className={styles.root}>
      {links.length && links.map((item, index) => {
        return (
        <li key={index} className={styles.item}>
          <a href={item.link} className={styles.link} target="_blank" rel="noreferrer">
            <img src={item.icon} className={styles.icon} alt="" aria-hidden="true"/>
            <span>{item.label}</span>
          </a>
        </li>
        )
      })
      }
    </ul>
  )
}

ContactLinks.propTypes = {
  email: PropTypes.string,
  telegram: PropTypes.string,
  viber: PropTypes.string,
  whatsup: PropTypes.string,
  vkontakte: PropTypes.string,
}

ContactLinks.defaultProps = {
  email: ``,
  telegram: ``,
  viber: ``,
  whatsup: ``,
  vkontakte: ``,
}

export default ContactLinks
