import React from 'react';

const Links = () => {
    const enitems = [
        'Home',
        'Services',
        'Portfolio',
        'About',
        'Contact'
    ]

    const bgitems = [
        'Начало',
        'Услуги',
        'Портфолио',
        'За мен',
        'Контакт'
    ]

    const jpitems = [
        'ホーム',
        'サービス',
        'ポートフォリオ',
        '紹介',
        'お問い合わせ'
    ]

    const cnitems = [
        '首页',
        '服务',
        '作品集',
        '关于我',
        '联系我'
    ]

  return (
    <div className='links'>
        <div className='btn-group'>
            <button type='button' className='btn btn-dark dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false'>
                Select Language
            </button>
            <ul className='dropdown-menu'>
                <li><button type='button' className='dropdown-item'>English</button></li>
                <li><button type='button' className='dropdown-item'>Bulgarian</button></li>
                <li><button type='button' className='dropdown-item'>Chinese</button></li>
                <li><button type='button' className='dropdown-item'>Japanese</button></li>
            </ul>
        </div>
        {enitems.map(item => (
            <a className='menu-item' href={`#${item.toLowerCase()}`} key={item}>{item}</a>
        ))}
    </div>
  )
}

export default Links