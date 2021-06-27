module.exports = function formatData (data) {
  return data.sort((a, b) =>
    new Date(a.created_at) - new Date(b.created_at))
    .slice(0, 5)
}
