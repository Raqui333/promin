import style from './documentos.module.scss';
import MainWindow from '@/app/components/documentos/MainWindow/MainWindow';

export default function Page() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <span>Processo Eletrônico</span>
      </div>
      <MainWindow title="Selecione o processo" />
    </div>
  );
}
