'use client';

import { useState } from 'react';
import style from './MainWindow.module.scss';

import Selector from '@/app/components/documentos/Selector/Selector';
import UploadFilesButton from '@/app/components/documentos/UploadFilesButton/UploadFilesButton';

// mock start

const sectors = [
  {
    label: 'Setor 01/test01',
    value: '11',
    apelido: 'test01',
    caminho: '/test01',
  },
  {
    label: 'Setor 02/test02',
    value: '22',
    apelido: 'test02',
    caminho: '/test02',
  },
  {
    label: 'Setor 03/test01',
    value: '33',
    apelido: 'test03',
    caminho: '/test03',
  },
];

const process = [
  {
    label: 'test 01',
    value: '1111',
  },
  {
    label: 'test 02',
    value: '2222',
  },
  {
    label: 'test 03',
    value: '3333',
  },
];

// mock end

function TestComponent({
  files,
  sectorId,
  folderId,
}: {
  files: File[];
  sectorId: number | null;
  folderId: number | null;
}) {
  const html = files.map((_, index: number) => (
    <div key={index} className={style.test}>
      Anexar Arquivo {index + 1}, Setor: {sectorId}, Pasta: {folderId}
    </div>
  ));

  return html;
}

export default function MainWindow({ title }: { title: string }) {
  const [sectorId, setSectorId] = useState<number | null>(null);
  const [folderId, setFolderId] = useState<number | null>(null);

  const [inputFiles, setInputFiles] = useState<File[]>([]);

  return (
    <div className={style.window}>
      <span>{title}:</span>
      <Selector
        title="Setor"
        list={sectors}
        placeholder="Selecione o setor"
        onSelect={setSectorId}
      />
      <Selector
        title="Processos existentes"
        list={process}
        placeholder="Selecione o processo"
        onSelect={setFolderId}
        disabled={sectorId ? undefined : true}
      />
      <UploadFilesButton
        onChange={setInputFiles}
        disabled={folderId ? undefined : true}
      />
      {inputFiles.length > 0 && (
        <TestComponent
          files={inputFiles}
          sectorId={sectorId}
          folderId={folderId}
        />
      )}
    </div>
  );
}
