(function () {
    const costEl = document.getElementById('cost');
    const calcInputIds = [ 'boardFtCost', 'length', 'lengthInFt', 'width', 'thickness' ];
    const calcInputItems = calcInputIds.reduce((els, id) => ({
      ...els,
      [id]: {
        name: id,
        el: document.getElementById(id),
        value: null
      }
    }), {});

    function calculateBoardFootage () {
      const length = calcInputItems.lengthInFt.value
        ? calcInputItems.length.value * 12
        : calcInputItems.length.value;

      const boardFootage = (calcInputItems.width.value * length * calcInputItems.thickness.value) / 144;

      return (boardFootage * calcInputItems.boardFtCost.value).toFixed(2);
    }

    costEl.innerHTML = '$0.00';

    Object.values(calcInputItems).forEach(item => {
      item.el.addEventListener('input', (e) => {
        item.value = item.name === 'lengthInFt'
          ? e.target.checked
          : e.target.value;

        costEl.innerHTML = `$${calculateBoardFootage()}`;
      })
    });
  })();