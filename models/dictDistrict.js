var mongoose = require('mongoose')

var dictDistrictSchema = new mongoose.Schema({
  code: String,
  province: String,
  city: String,
  district: String,
  name: String,
  level: Number
})

var dictDistrictModel = mongoose.model('dictDistrict', dictDistrictSchema)

function DictDistrict (dictDistrict) {
  this.dictDistrict = dictDistrict
}

DictDistrict.prototype.save = function (callback) {
  var dictDistrict = this.dictDistrict
  var newDictDistrict = new dictDistrictModel(dictDistrict)
  newDictDistrict.save(function (err, dictDistrictItem) {
    if (err) {
      return callback(err)
    }
    callback(null, dictDistrictItem)
  })
}

DictDistrict.getOne = function (query, callback, opts, fields, populate) {
  var options = opts || {}
  var _fields = fields || null
  var _populate = populate || ''

  dictDistrictModel
  .findOne(query, _fields, options)
  .populate(_populate)
  .exec(function (err, dictDistrictInfo) {
    if (err) {
      return callback(err)
    }
    callback(null, dictDistrictInfo)
  })
}

DictDistrict.getSome = function (query, callback, opts, fields, populate) {
  var options = opts || {}
  var _fields = fields || null
  var _populate = populate || ''
  dictDistrictModel
  .find(query, _fields, options)
  .populate(_populate)
  .exec(function (err, dictDistricts) {
    if (err) {
      return callback(err)
    }
    callback(null, dictDistricts)
  })
}

DictDistrict.updateOne = function (query, obj, callback, opts, populate) {
  var options = opts || {}
  var _populate = populate || ''

  dictDistrictModel
  .findOneAndUpdate(query, obj, options)
  .populate(_populate)
  .exec(function (err, updictDistrict) {
    if (err) {
      return callback(err)
    }
    callback(null, updictDistrict)
  })
}

module.exports = DictDistrict
