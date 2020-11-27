import React from 'react'
import PropTypes from 'prop-types'

import styles from './ContactLinks.module.css'

import MailIcon from '../../../images/mail.svg'
import TelegramIcon from '../../../images/telegram.svg'
import ViberIcon from '../../../images/viber.svg'
import WhatsupIcon from '../../../images/whatsapp.svg'
import VkIcon from '../../../images/vk.svg'

const links = [
  {
    link: 'mailto:mail@artelx.ru',
    label: 'mail@artelx.ru',
    icon: MailIcon
  },
  {
    link: 'https://t.me/artelxru',
    label: 'Telegram',
    icon: TelegramIcon
  },
  {
    link: 'viber://chat?number=%2B79531632748',
    label: 'Viber',
    icon: ViberIcon
  },
  {
    link: 'https://wa.me/79531632748',
    label: 'WhatsApp',
    icon: WhatsupIcon
  },
  {
    link: 'https://vk.com/artelx',
    label: 'Вконтакте',
    icon: VkIcon
  },
]

const ContactLinks = () => {
  return (
    <ul className={styles.root}>
      {links.length && links.map((item, index) => {
        return (
        <li key={index} className={styles.item}>
          <a href={item.link} className={styles.link}>
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
  siteTitle: PropTypes.string,
  subTitle: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
}


export default ContactLinks
