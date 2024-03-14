import React from 'react';

const QueriesSection = () => {
  const [openDialog, setopenDialog] = React.useState(false);
  return (
    <div className="root-query-section">
      <section className="queries-header-root">
        <h4>Queries</h4>
      </section>
    </div>
  );
};

export default QueriesSection;
