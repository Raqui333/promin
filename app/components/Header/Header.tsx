'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import style from './Header.module.scss';

const ICON_SIZE = 15;

interface HeaderButtonProps {
  label: string;
  href: string;
  icon?: string;
  className?: string;
}

interface HeaderIconProps {
  src: string;
  alt: string;
  className?: string;
}

interface HeaderDropdownProps {
  label: string;
  icon?: string;
  list: HeaderButtonProps[];
}

function HeaderIcon({ src, alt }: HeaderIconProps) {
  return (
    <Image
      className={style.icon}
      src={src}
      width={ICON_SIZE}
      height={ICON_SIZE}
      alt={alt}
    ></Image>
  );
}

function HeaderButton({ label, href, icon, className }: HeaderButtonProps) {
  const isActive = usePathname() === href ? 'active' : '';
  return (
    <Link className={`${className} ${isActive}`} href={href}>
      {icon && <HeaderIcon src={icon} alt={`${label} icon`} />}
      {label}
    </Link>
  );
}

function HeaderDropdown({ label, icon, list }: HeaderDropdownProps) {
  return (
    <div className={`${style.button} ${style.dropdown}`}>
      {icon && <HeaderIcon src={icon} alt={`${label} icon`} />}
      {label}
      <div className={style.dropdown_menu}>
        {list.map((item, index) => (
          <HeaderButton
            className={style.dropdown_menu_item}
            key={index}
            label={item.label}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </div>
      <Image
        className={style.dropdown_icon}
        src="/icons/dropdown.svg"
        width={ICON_SIZE / 1.5}
        height={ICON_SIZE / 1.5}
        alt="dropdown menu icon"
      ></Image>
    </div>
  );
}

export default function Header() {
  const documents_dropdown: HeaderButtonProps[] = [
    {
      label: 'Criar Setor',
      icon: '/icons/folder.svg',
      href: '/test01',
    },
    {
      label: 'Anexar Documento',
      icon: '/icons/pdf.svg',
      href: '/documentos',
    },
    {
      label: 'Pesquisar Documento',
      icon: '/icons/search.svg',
      href: '/test03',
    },
  ];

  return (
    <div className={style.header}>
      <HeaderButton
        className={style.button}
        label="Inicio"
        href="/"
        icon="/icons/home.svg"
      />

      <HeaderDropdown
        label="Documentos"
        icon="/icons/file.svg"
        list={documents_dropdown}
      />

      <HeaderButton
        className={style.button}
        label="Sair"
        href="/login"
        icon="/icons/logout.svg"
      />
    </div>
  );
}
