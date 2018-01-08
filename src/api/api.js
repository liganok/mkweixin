import wepy from 'wepy'

const API_ROOT = 'https://localhost/api'
let token = null

async function wxRequest(method, body, url) {
  let res = await wepy.request({
    url: `${API_ROOT}${url}`,
    method: method || 'GET',
    body: body,
    header: { 'Content-Type': 'application/json', 'Authorization': `Token ${token}` }
  })
  return res
}

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;

const requests = {
  get:  url => wxRequest('GET',null,url),
}

const Agenda = {
  getTemplates: () => requests.get('/agenda/template'),
  getTemplateDetail: (agendaId) => requests.get(`/agenda/template/${agendaId}`),
}

const Template = {
  all: (page) => requests.get(`/template?${limit(20, page)}`),
  get: agendaId => requests.get(`/template/${agendaId}`)
}

export default {
  Template,
  Agenda,
  setToken: _token => { token = _token }
}
