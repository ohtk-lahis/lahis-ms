import LahisSummarizedTable from "components/excel/lahisSummarizedTable";
import Protect from "components/auth/protect";
import Layout from "components/layout";
import Breadcrumb from "components/layout/breadcrumb";
import { NextPage } from "next";
import { useTranslation } from "react-i18next";

const LahisSummarizedTablePage: NextPage = () => {
  const { t } = useTranslation();
  return (
    <Protect>
      <Layout>
        <Breadcrumb
          crumbs={[
            {
              text: `${t(
                "breadcrumb.lahisSummarizedTable",
                "Summarized table"
              )}`,
            },
          ]}
        />
        <p className="mb-4 text-sm text-slate-600">
          {t(
            "excel.lahisSummarizedTable.help",
            "Animal Sick/Death summary for all authorities. Filter province/district/village in Excel if needed. Columns keep affected households and animals separate from village census households and animal population, with sick / dead / recoverd / stamped out counts and officer/system close source."
          )}
        </p>
        <LahisSummarizedTable />
      </Layout>
    </Protect>
  );
};

export default LahisSummarizedTablePage;
