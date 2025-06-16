"use client";
import { ChevronRightIcon } from "lucide-react";
import styles from "./PriceList.module.scss";
import { useState } from "react";

type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem = ({
  title,
  children,
  isOpen,
  onClick,
}: AccordionItemProps) => (
  <div className={styles.Item}>
    <div className={styles.Header}>
      <button className={styles.Trigger} onClick={onClick}>
        <ChevronRightIcon
          className={`${styles.Chevron} ${isOpen ? styles.Open : ""}`}
        />
        <span className={styles.TitleText}>{title}</span>
      </button>
    </div>
    {isOpen && (
      <div className={styles.Content}>
        <div className={styles.ContentText}>{children}</div>
      </div>
    )}
  </div>
);

const PriceList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (item: string) => {
    setOpenItem((prev) => (prev === item ? null : item));
  };

  return (
    <div className={styles.Root}>
      <AccordionItem
        title="Неврология"
        isOpen={openItem === "item-1"}
        onClick={() => handleToggle("item-1")}
      >
        <div className={styles.subTitle}>
          <div className={styles.left}>
            <h4>Первичный прием</h4>
            <h4>Повторный прием</h4>
            <h4>Иглорефлексотерапия</h4>
            <h4>Кинезиотерапия</h4>
          </div>
          <div className={styles.right}>
            <h4>1 200 сом</h4>
            <h4>500 сом</h4>
            <h4>1 000 сом</h4>
            <h4>3 000 сом</h4>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem
        title="Кардиология"
        isOpen={openItem === "item-2"}
        onClick={() => handleToggle("item-2")}
      >
        <div className={styles.subTitle}>
          <div className={styles.left}>
            <h4>Первичный прием</h4>
            <h4>ЭКГ</h4>
          </div>
          <div className={styles.right}>
            <h4>1 500 сом</h4>
            <h4>800 сом</h4>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem
        title="Стоматология"
        isOpen={openItem === "item-3"}
        onClick={() => handleToggle("item-3")}
      >
        <div className={styles.subTitle}>
          <div className={styles.left}>
            <h4>Консультация</h4>
            <h4>Чистка зубов</h4>
          </div>
          <div className={styles.right}>
            <h4>500 сом</h4>
            <h4>2 000 сом</h4>
          </div>
        </div>
      </AccordionItem>
    </div>
  );
};

export default PriceList;
