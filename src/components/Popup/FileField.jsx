import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import s from "./styles/FileField.module.scss";

const messages = {
  WITHOUT_TOOLTIP: "Image has not been selected.",
  SIZE_ERROR: "Your image is larger than 4 MB. Choose a smaller image.",
  TYPE_ERROR: "Image type is invalid.",
};

const getValidate = (file, setError) => {
  if (file.size > 800000) {
    setError(messages.SIZE_ERROR);
    return false;
  }

  if (!file.type.match(/png|jpg|jpeg/gi)) {
    setError(messages.TYPE_ERROR);
    return false;
  }

  return true;
};

const FileField = ({
  name,
  accept,
  label,
  defaultValue = null,
  onChange,
  setError,
}) => {
  const [tooltip, setTooltip] = useState(label);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [preview, setPreview] = useState(defaultValue);

  useEffect(() => {
    let isCancel = false;
    const reader = new FileReader();

    if (uploadedFile) {
      reader.onload = (e) => {
        const { result } = e.target;

        if (result && !isCancel) {
          setPreview(result);
          onChange(result);
        }
      };

      reader.readAsDataURL(uploadedFile);
    }

    return () => {
      isCancel = true;

      if (reader && reader.readyState === 1) {
        reader.abort();
      }
    };
  }, [uploadedFile]);

  const handleChange = (e) => {
    const file = e.target.files[0] || null;

    if (file && getValidate(file, setError)) {
      setTooltip(`Image: ${file.name}`);
      setUploadedFile(file);
    } else {
      preview === defaultValue &&
        tooltip !== messages.WITHOUT_TOOLTIP &&
        setTooltip(messages.WITHOUT_TOOLTIP);
    }
  };

  const handleDelete = () => {
    onChange(null);
    setPreview(null);
    tooltip !== messages.WITHOUT_TOOLTIP &&
      setTooltip(messages.WITHOUT_TOOLTIP);
  };

  const previewStyle = {
    backgroundImage: preview ? `url(${preview})` : "var(--image)",
  };

  return (
    <div className={s.root}>
      <div className={s.preview} style={previewStyle}></div>
      <div className={s.btnsContainer}>
        <label className={s.fileInputLabel}>
          <input
            className={cn(s.fileInput, "fileInput")}
            type="file"
            name={name}
            accept={accept}
            onChange={handleChange}
          />
        </label>

        {preview && (
          <button className={s.deleteBtn} type="button" onClick={handleDelete}>
            delete image
          </button>
        )}
      </div>
      <span className={s.tooltip}>{tooltip}</span>
    </div>
  );
};

FileField.propTypes = {
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  accept: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default FileField;
