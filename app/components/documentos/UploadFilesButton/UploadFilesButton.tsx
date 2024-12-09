import { useCallback } from 'react';
import Image from 'next/image';
import style from './UploadFilesButton.module.scss';

const ICON_SIZE = 15;

export default function UploadFilesButton({
  onChange,
  disabled,
}: {
  onChange: React.Dispatch<React.SetStateAction<File[]>>;
  disabled?: boolean;
}) {
  const uploadFilesHandler = useCallback(
    (files_list: FileList | null) => {
      const files = Array.from(files_list || []);

      if (files.some((file) => file.type !== 'application/pdf')) {
        alert('Selecione apenas arquivos no formato PDF');
        return -1;
      }

      onChange(files);
    },
    [onChange]
  );

  return (
    <div className={`${style.button} ${disabled && 'disabled'}`}>
      <Image
        className="icon"
        src="/icons/plus.svg"
        width={ICON_SIZE}
        height={ICON_SIZE}
        alt="attach file icon"
      />
      <label htmlFor="file" className={style.button_label}>
        Anexar Arquivo(s)
      </label>
      <input
        className={style.button_input}
        id="file"
        type="file"
        accept="application/pdf"
        onChange={(e) => uploadFilesHandler(e.target.files)}
        name="files[]"
        multiple
      />
    </div>
  );
}
