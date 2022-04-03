/* global axios */

const url = 'https://hexschool.github.io/js-filter-data/data.json';
let resData;
const table = document.querySelector('.table-content');
let showData = [];

let category = '';
const filter = document.querySelector('.filter');

const renderData = (data) => {
  let str = '';
  data.forEach((b) => {
    const content = `<tr><td>${b.作物名稱}
    </td><td>${b.市場名稱}
    </td><td>${b.上價}
    </td><td>${b.中價}
    </td><td> ${b.下價}
    </td><td>${b.平均價}
    </td><td>${b.交易量}
    </td></tr>`;
    str += content;
  });
  table.innerHTML = str;
};

function filterCategory(e) {
  if (e.target.nodeName === 'BUTTON') {
    category = e.target.dataset.category;
    showData = resData.filter((i) => i.種類代碼 === category);
    renderData(showData);
  }
}

filter.addEventListener('click', filterCategory);

axios.get(url).then((res) => {
  resData = res.data.filter((a) => a.作物名稱);
  renderData(resData);
});
