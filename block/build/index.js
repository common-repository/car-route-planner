/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.json */ "./src/config.json");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);







function Edit({
  attributes,
  setAttributes
}) {
  const {
    mode,
    language,
    currency,
    measure,
    text_color,
    background_color,
    accent_color,
    disable_font_auto_tuning,
    font_family,
    font_size,
    default_from,
    hide_from,
    default_to,
    hide_to,
    default_via,
    show_via,
    show_fuel_calc,
    default_fuel_consumption,
    default_fuel_price,
    show_speed_profile,
    default_speed_limit_motorway,
    default_speed_limit_other,
    show_result_length,
    show_result_driving_time,
    show_result_fuel_amount,
    show_result_fuel_cost,
    show_result_customized_cost,
    customized_cost_label,
    customized_cost_formula,
    show_result_map,
    show_result_scheme,
    calculate_instantly,
    only_countries,
    prefer_countries
  } = attributes;
  const modeFieldsetDisabled = mode == 'simple';
  const onChangeMode = newMode => {
    const modeFieldset = document.getElementById("crp-advanced-group");
    if ("simple" == newMode) {
      modeFieldset.setAttribute("disabled", "disabled");
    } else {
      modeFieldset.removeAttribute("disabled");
    }
    setAttributes({
      mode: newMode
    });
  };
  const onChangeLanguage = newLanguage => {
    setAttributes({
      language: newLanguage
    });
  };
  const onChangeCurrency = newCurrency => {
    setAttributes({
      currency: newCurrency
    });
  };
  const onChangeMeasure = newMeasure => {
    setAttributes({
      measure: newMeasure
    });
  };
  const onChangeTextColor = newColor => {
    setAttributes({
      text_color: newColor
    });
  };
  const onChangeBackgroundColor = newColor => {
    setAttributes({
      background_color: newColor
    });
  };
  const onChangeAccentColor = newColor => {
    setAttributes({
      accent_color: newColor
    });
  };
  const fontFieldsetDisabled = disable_font_auto_tuning == false;
  const onChangeDisableFontAutotuning = newValue => {
    const fontFieldset = document.getElementById("crp-font-group");
    if (false == newValue) {
      fontFieldset.setAttribute("disabled", "disabled");
    } else {
      fontFieldset.removeAttribute("disabled");
    }
    setAttributes({
      disable_font_auto_tuning: newValue
    });
  };
  const onChangeFontFamily = newValue => {
    setAttributes({
      font_family: newValue
    });
  };
  const onChangeFontSize = newValue => {
    setAttributes({
      font_size: newValue
    });
  };
  const onChangeDefaultFrom = newValue => {
    setAttributes({
      default_from: newValue
    });
  };
  const onChangeHideFrom = newValue => {
    setAttributes({
      hide_from: newValue
    });
  };
  const onChangeDefaultTo = newValue => {
    setAttributes({
      default_to: newValue
    });
  };
  const onChangeHideTo = newValue => {
    setAttributes({
      hide_to: newValue
    });
  };
  const onChangeDefaultVia = newValue => {
    setAttributes({
      default_via: newValue
    });
  };
  const onChangeShowVia = newValue => {
    setAttributes({
      show_via: newValue
    });
  };
  const onChangeShowFuelCalc = newValue => {
    setAttributes({
      show_fuel_calc: newValue
    });
  };
  const onChangeDefaultFuelConsumption = newValue => {
    setAttributes({
      default_fuel_consumption: newValue
    });
  };
  const onChangeDefaultFuelPrice = newValue => {
    setAttributes({
      default_fuel_price: newValue
    });
  };
  const onChangeShowSpeedProfile = newValue => {
    setAttributes({
      show_speed_profile: newValue
    });
  };
  const onChangeDefaultSpeedLimitMotorway = newValue => {
    setAttributes({
      default_speed_limit_motorway: newValue
    });
  };
  const onChangeDefaultSpeedLimitOther = newValue => {
    setAttributes({
      default_speed_limit_other: newValue
    });
  };
  const onChangeShowResultLength = newValue => {
    setAttributes({
      show_result_length: newValue
    });
  };
  const onChangeShowResultDrivingTime = newValue => {
    setAttributes({
      show_result_driving_time: newValue
    });
  };
  const onChangeShowResultFuelAmount = newValue => {
    setAttributes({
      show_result_fuel_amount: newValue
    });
  };
  const onChangeShowResultFuelCost = newValue => {
    setAttributes({
      show_result_fuel_cost: newValue
    });
  };
  const customizedCostFieldsetDisabled = show_result_customized_cost == false;
  const onChangeShowResultCustomizedCost = newValue => {
    const customizedCostFieldset = document.getElementById("crp-customized-cost-group");
    if (false == newValue) {
      customizedCostFieldset.setAttribute("disabled", "disabled");
    } else {
      customizedCostFieldset.removeAttribute("disabled");
    }
    setAttributes({
      show_result_customized_cost: newValue
    });
  };
  const onChangeCustomizedCostLabel = newValue => {
    setAttributes({
      customized_cost_label: newValue
    });
  };
  const onChangeCustomizedCostFormula = newValue => {
    setAttributes({
      customized_cost_formula: newValue
    });
  };
  const onChangeShowResultMap = newValue => {
    setAttributes({
      show_result_map: newValue
    });
  };
  const onChangeShowResultScheme = newValue => {
    setAttributes({
      show_result_scheme: newValue
    });
  };
  const onChangeCalculateInstantly = newValue => {
    setAttributes({
      calculate_instantly: newValue
    });
  };
  const onChangeOnlyCountries = newValue => {
    setAttributes({
      only_countries: newValue
    });
  };
  const onChangePreferCountries = newValue => {
    setAttributes({
      prefer_countries: newValue
    });
  };
  const languageOptions = _config_json__WEBPACK_IMPORTED_MODULE_5__.languages.map(function (item) {
    return {
      "label": item,
      "value": item
    };
  });
  const currencyOptions = _config_json__WEBPACK_IMPORTED_MODULE_5__.currencies.map(function (item) {
    return {
      "label": item,
      "value": item
    };
  });
  const fontFamilyOptions = _config_json__WEBPACK_IMPORTED_MODULE_5__.fonts.map(function (item) {
    return {
      "label": item,
      "value": item
    };
  });
  const fontSizeOptions = [{
    "label": "13 px",
    "value": "13px"
  }, {
    "label": "14 px",
    "value": "14px"
  }, {
    "label": "15 px",
    "value": "15px"
  }, {
    "label": "16 px",
    "value": "16px"
  }, {
    "label": "17 px",
    "value": "17px"
  }, {
    "label": "18 px",
    "value": "18px"
  }, {
    "label": "19 px",
    "value": "19px"
  }, {
    "label": "20 px",
    "value": "20px"
  }, {
    "label": "0.5 rem",
    "value": "0.5rem"
  }, {
    "label": "0.6 rem",
    "value": "0.6rem"
  }, {
    "label": "0.7 rem",
    "value": "0.7rem"
  }, {
    "label": "0.8 rem",
    "value": "0.8rem"
  }, {
    "label": "0.9 rem",
    "value": "0.9rem"
  }, {
    "label": "1 rem",
    "value": "1rem"
  }, {
    "label": "1.1 rem",
    "value": "1.1rem"
  }, {
    "label": "1.2 rem",
    "value": "1.2rem"
  }, {
    "label": "1.3 rem",
    "value": "1.3rem"
  }, {
    "label": "1.4 rem",
    "value": "1.4rem"
  }, {
    "label": "1.5 rem",
    "value": "1.5rem"
  }];
  const measureOptions = [{
    "label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kilometer, liter", "car-route-planner"),
    "value": "metric"
  }, {
    "label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mile, UK gallon", "car-route-planner"),
    "value": "imperial"
  }, {
    "label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mile, US gallon", "car-route-planner"),
    "value": "us_cust"
  }];
  const modeOptions = [{
    "label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Minimalistic mode, results will be displayed on plugin developer's website.", "car-route-planner"),
    "value": "simple"
  }, {
    "label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Advanced mode, results will be displayed inside iframe with 'powered by' hyperlink.", "car-route-planner"),
    "value": "advanced"
  }];
  const onlyCountriesOptions = _config_json__WEBPACK_IMPORTED_MODULE_5__.countries.map(function (item) {
    return {
      "label": item.name,
      "value": item.iso
    };
  });
  const preferCountriesOptions = _config_json__WEBPACK_IMPORTED_MODULE_5__.countries.map(function (item) {
    return {
      "label": item.name,
      "value": item.iso
    };
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mode', 'car-route-planner'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mode', 'car-route-planner'),
    selected: mode,
    options: modeOptions,
    onChange: onChangeMode
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", {
    id: "crp-advanced-group",
    disabled: modeFieldsetDisabled
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('General Settings', 'car-route-planner'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Language', 'car-route-planner'),
    value: language,
    options: languageOptions,
    onChange: onChangeLanguage
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Currency', 'car-route-planner'),
    value: currency,
    options: currencyOptions,
    onChange: onChangeCurrency
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Units', 'car-route-planner'),
    value: measure,
    options: measureOptions,
    onChange: onChangeMeasure
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Design', 'car-route-planner'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manual font selection', 'car-route-planner'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Disable automatic font detection', 'car-route-planner'),
    checked: disable_font_auto_tuning,
    onChange: onChangeDisableFontAutotuning
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", {
    id: "crp-font-group",
    disabled: fontFieldsetDisabled
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font family', 'car-route-planner'),
    value: font_family,
    options: fontFamilyOptions,
    onChange: onChangeFontFamily
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font size', 'car-route-planner'),
    value: font_size,
    options: fontSizeOptions,
    onChange: onChangeFontSize
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalVStack, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalText, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text color', 'car-route-planner')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ColorPicker, {
    color: text_color,
    onChange: onChangeTextColor,
    copyFormat: "hex"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalVStack, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalText, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background color', 'car-route-planner')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ColorPicker, {
    color: background_color,
    onChange: onChangeBackgroundColor,
    copyFormat: "hex"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalVStack, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalText, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Accent color', 'car-route-planner')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ColorPicker, {
    color: accent_color,
    onChange: onChangeAccentColor,
    copyFormat: "hex"
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Form', 'car-route-planner'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default value for "%s"', 'car-route-planner'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('From', 'car-route-planner')),
    value: default_from,
    onChange: onChangeDefaultFrom
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('hide "%s"', 'car-route-planner'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('From', 'car-route-planner')),
    checked: hide_from,
    onChange: onChangeHideFrom
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default value for "%s"', 'car-route-planner'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('To', 'car-route-planner')),
    value: default_to,
    onChange: onChangeDefaultTo
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('hide "%s"', 'car-route-planner'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('To', 'car-route-planner')),
    checked: hide_to,
    onChange: onChangeHideTo
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('show "%s"', 'car-route-planner'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Intermediate points', 'car-route-planner')),
    checked: show_via,
    onChange: onChangeShowVia
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default value for "%s"', 'car-route-planner'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Intermediate points', 'car-route-planner')),
    value: default_via,
    onChange: onChangeDefaultVia
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('show fuel calculator', 'car-route-planner'),
    checked: show_fuel_calc,
    onChange: onChangeShowFuelCalc
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default value for "%s"', 'car-route-planner'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fuel consumption', 'car-route-planner')),
    value: default_fuel_consumption,
    onChange: onChangeDefaultFuelConsumption
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default value for "%s"', 'car-route-planner'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fuel price', 'car-route-planner')),
    value: default_fuel_price,
    onChange: onChangeDefaultFuelPrice
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('show "Maximum speed" fields', 'car-route-planner'),
    checked: show_speed_profile,
    onChange: onChangeShowSpeedProfile
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Maximum speed on motorway', 'car-route-planner'),
    value: default_speed_limit_motorway,
    onChange: onChangeDefaultSpeedLimitMotorway
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Maximum speed on other roads', 'car-route-planner'),
    value: default_speed_limit_other,
    onChange: onChangeDefaultSpeedLimitOther
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Results', 'car-route-planner'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('show "%s"', 'car-route-planner'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Route length', 'car-route-planner')),
    checked: show_result_length,
    onChange: onChangeShowResultLength
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('show "%s"', 'car-route-planner'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Driving time', 'car-route-planner')),
    checked: show_result_driving_time,
    onChange: onChangeShowResultDrivingTime
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('show "%s"', 'car-route-planner'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fuel amount', 'car-route-planner')),
    checked: show_result_fuel_amount,
    onChange: onChangeShowResultFuelAmount
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('show "%s"', 'car-route-planner'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fuel cost', 'car-route-planner')),
    checked: show_result_fuel_cost,
    onChange: onChangeShowResultFuelCost
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('show "%s"', 'car-route-planner'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Customized cost', 'car-route-planner')),
    checked: show_result_customized_cost,
    onChange: onChangeShowResultCustomizedCost
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", {
    id: "crp-customized-cost-group",
    disabled: customizedCostFieldsetDisabled
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Formula for "Customized cost"', 'car-route-planner'),
    value: customized_cost_formula,
    onChange: onChangeCustomizedCostFormula
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ExternalLink, {
    href: getUrl(language, currency, measure) + "/widget/v1/doc#customized_cost"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('how to compose formula', 'car-route-planner'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Label for "Customized cost"', 'car-route-planner'),
    value: customized_cost_label,
    onChange: onChangeCustomizedCostLabel
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('show map', 'car-route-planner'),
    checked: show_result_map,
    onChange: onChangeShowResultMap
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('show route scheme', 'car-route-planner'),
    checked: show_result_scheme,
    onChange: onChangeShowResultScheme
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('calculate route automatically on page load', 'car-route-planner'),
    checked: calculate_instantly,
    onChange: onChangeCalculateInstantly
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('strictly limit results by countries', 'car-route-planner'),
    value: only_countries,
    options: onlyCountriesOptions,
    onChange: onChangeOnlyCountries,
    multiple: "true"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('soft preference for countries', 'car-route-planner'),
    value: prefer_countries,
    options: preferCountriesOptions,
    onChange: onChangePreferCountries,
    multiple: "true"
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Disabled, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    sandbox: "allow-scripts",
    allowTransparency: "true",
    src: "data:text/html," + encodeURIComponent(getHtmlBlockPreview(attributes))
  }))));
}
function getHtmlBlockPreview(attributes) {
  const {
    mode,
    language,
    currency,
    measure,
    text_color,
    background_color,
    accent_color,
    disable_font_auto_tuning,
    font_family,
    font_size,
    default_from,
    hide_from,
    default_to,
    hide_to,
    default_via,
    show_via,
    show_fuel_calc,
    default_fuel_consumption,
    default_fuel_price,
    show_speed_profile,
    default_speed_limit_motorway,
    default_speed_limit_other,
    show_result_length,
    show_result_driving_time,
    show_result_fuel_amount,
    show_result_fuel_cost,
    show_result_customized_cost,
    customized_cost_label,
    customized_cost_formula,
    show_result_map,
    show_result_scheme,
    calculate_instantly,
    only_countries,
    prefer_countries
  } = attributes;
  if (mode == "simple") {
    return '' + '<style>.crp-simple-form .crp-table {    display: table;}.crp-simple-form .crp-tr {    display: table-row;}.crp-simple-form .crp-tr .crp-td {    display: table-cell;    vertical-align: bottom;    padding-left: 1em;}.crp-simple-form .crp-tr .crp-td:first-child {    padding-left: 0;}.crp-simple-form .crp-tr .crp-td {    padding-top: 1em;}.crp-simple-form .crp-tr:first-child .crp-td {    padding-top: 0;}.crp-simple-form .crp-submit {    margin-top: 1em;}</style>' + '<form class="crp-simple-form" action="#">' + '<div class="crp-table">' + '<div class="crp-tr">' + '<div class="crp-td">' + '<label for="crp-from">' + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('From', 'car-route-planner') + '</label>' + '</div>' + '<div class="crp-td">' + '<input type="text" name="from" id="crp-from">' + '</div>' + '</div>' + '<div class="crp-tr">' + '<div class="crp-td">' + '<label for="crp-to">' + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('To', 'car-route-planner') + '</label>' + '</div>' + '<div class="crp-td">' + '<input type="text" name="to" id="crp-to">' + '</div>' + '</div>' + '</div>' + '<input type="submit" value="' + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Calculate', 'car-route-planner') + '" class="crp-submit">' + '</form>';
  }
  var attributesString = "";
  if (language) {
    attributesString += ' data-language="' + language + '"';
  }
  if (currency) {
    attributesString += ' data-currency="' + currency + '"';
  }
  if (measure) {
    attributesString += ' data-measure="' + measure + '"';
  }
  if (accent_color && background_color && text_color) {
    attributesString += ' data-css="' + getUrl(language, currency, measure) + "/widget/v1/widget.css?pc=" + accent_color.replace('#', '') + "&bc=" + background_color.replace('#', '') + "&tc=" + text_color.replace('#', '') + '"';
  }
  if (disable_font_auto_tuning) {
    attributesString += ' data-disable-font-auto-tuning';
  }
  if (font_family) {
    attributesString += ' data-font-family="' + font_family + '"';
  }
  if (font_size) {
    attributesString += ' data-font-size="' + font_size + '"';
  }
  if (default_from) {
    attributesString += ' data-default-from="' + default_from + '"';
  }
  if (hide_from) {
    attributesString += ' data-hide-from';
  }
  if (default_to) {
    attributesString += ' data-default-to="' + default_to + '"';
  }
  if (hide_to) {
    attributesString += ' data-hide-to';
  }
  if (default_via) {
    attributesString += ' data-default-via="' + default_via + '"';
  }
  if (show_via) {
    attributesString += ' data-show-via';
  }
  if (show_fuel_calc) {
    attributesString += ' data-show-fuel-calc';
  }
  if (default_fuel_consumption) {
    attributesString += ' data-default-fuel-consumption="' + default_fuel_consumption + '"';
  }
  if (default_fuel_price) {
    attributesString += ' data-default-fuel-price="' + default_fuel_price + '"';
  }
  if (show_speed_profile) {
    attributesString += ' data-show-speed-profile';
  }
  if (default_speed_limit_motorway) {
    attributesString += ' data-default-speed-limit-mototrway="' + default_speed_limit_motorway + '"';
  }
  if (default_speed_limit_other) {
    attributesString += ' data-default-speed-limit-other="' + default_speed_limit_other + '"';
  }
  if (show_result_length) {
    attributesString += ' data-show-result-length';
  }
  if (show_result_driving_time) {
    attributesString += ' data-show-result-driving-time';
  }
  if (show_result_fuel_amount) {
    attributesString += ' data-show-result-fuel-amount';
  }
  if (show_result_fuel_cost) {
    attributesString += ' data-show-result-fuel-cost';
  }
  if (show_result_customized_cost) {
    attributesString += ' data-show-result-customized-cost';
  }
  if (customized_cost_label) {
    attributesString += ' data-customized-cost-label="' + customized_cost_label + '"';
  }
  if (customized_cost_formula) {
    attributesString += ' data-customized-cost-formula="' + customized_cost_formula + '"';
  }
  if (show_result_map) {
    attributesString += ' data-show-result-map';
  }
  if (show_result_scheme) {
    attributesString += ' data-show-result-scheme';
  }
  if (calculate_instantly) {
    attributesString += ' data-calculate-instantly';
  }
  if (only_countries) {
    attributesString += ' data-only-countries="' + only_countries.join(',') + '"';
  }
  if (prefer_countries) {
    attributesString += ' data-prefer-countries="' + prefer_countries.join(',') + '"';
  }
  return '<a href="' + getUrl(language, currency, measure) + '" ' + attributesString + ' class="rp-widget-link"></a>' + '<script src="' + getUrl(language, currency, measure) + '/widget/v1/client.js"></script>';
}
function getUrl(language, currency, measure) {
  var url = "";
  _config_json__WEBPACK_IMPORTED_MODULE_5__.i18nSettings.forEach(function (struct) {
    if (language == struct.language && currency == struct.currency && measure == struct.measurement) {
      url = struct.url;
    }
  });
  if (!url) {
    _config_json__WEBPACK_IMPORTED_MODULE_5__.i18nSettings.forEach(function (struct) {
      if (language == struct.language) {
        url = struct.url;
      }
    });
  }
  if (!url) {
    _config_json__WEBPACK_IMPORTED_MODULE_5__.i18nSettings.forEach(function (struct) {
      if (struct.default) {
        url = struct.url;
      }
    });
  }
  return url;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function Save({
  attributes
}) {
  const {
    mode,
    language,
    currency,
    measure,
    text_color,
    background_color,
    accent_color,
    disable_font_auto_tuning,
    font_family,
    font_size,
    default_from,
    hide_from,
    default_to,
    hide_to,
    default_via,
    show_via,
    show_fuel_calc,
    default_fuel_consumption,
    default_fuel_price,
    show_speed_profile,
    default_speed_limit_motorway,
    default_speed_limit_other,
    show_result_length,
    show_result_driving_time,
    show_result_fuel_amount,
    show_result_fuel_cost,
    show_result_customized_cost,
    customized_cost_label,
    customized_cost_formula,
    show_result_map,
    show_result_scheme,
    calculate_instantly,
    only_countries,
    prefer_countries
  } = attributes;
  if (mode == "simple") {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, " [crp] ");
  }
  var attributesString = "";
  if (language) {
    attributesString += ' language="' + language + '"';
  }
  if (currency) {
    attributesString += ' currency="' + currency + '"';
  }
  if (measure) {
    attributesString += ' measure="' + measure + '"';
  }
  if (accent_color) {
    attributesString += ' accent_color="' + accent_color + '"';
  }
  if (background_color) {
    attributesString += ' background_color="' + background_color + '"';
  }
  if (text_color) {
    attributesString += ' text_color="' + text_color + '"';
  }
  if (disable_font_auto_tuning) {
    attributesString += ' disable_font_auto_tuning';
  }
  if (font_family) {
    attributesString += ' font_family="' + font_family + '"';
  }
  if (font_size) {
    attributesString += ' font_size="' + font_size + '"';
  }
  if (default_from) {
    attributesString += ' default_from="' + default_from + '"';
  }
  if (hide_from) {
    attributesString += ' hide_from';
  }
  if (default_to) {
    attributesString += ' default_to="' + default_to + '"';
  }
  if (hide_to) {
    attributesString += ' hide_to';
  }
  if (default_via) {
    attributesString += ' default_via="' + default_via + '"';
  }
  if (show_via) {
    attributesString += ' show_via';
  }
  if (show_fuel_calc) {
    attributesString += ' show_fuel_calc';
  }
  if (default_fuel_consumption) {
    attributesString += ' default_fuel_consumption="' + default_fuel_consumption + '"';
  }
  if (default_fuel_price) {
    attributesString += ' default_fuel_price="' + default_fuel_price + '"';
  }
  if (show_speed_profile) {
    attributesString += ' show_speed_profile';
  }
  if (default_speed_limit_motorway) {
    attributesString += ' default_speed_limit_motorway="' + default_speed_limit_motorway + '"';
  }
  if (default_speed_limit_other) {
    attributesString += ' default_speed_limit_other="' + default_speed_limit_other + '"';
  }
  if (show_result_length) {
    attributesString += ' show_result_length';
  }
  if (show_result_driving_time) {
    attributesString += ' show_result_driving_time';
  }
  if (show_result_fuel_amount) {
    attributesString += ' show_result_fuel_amount';
  }
  if (show_result_fuel_cost) {
    attributesString += ' show_result_fuel_cost';
  }
  if (show_result_customized_cost) {
    attributesString += ' show_result_customized_cost';
  }
  if (customized_cost_label) {
    attributesString += ' customized_cost_label="' + customized_cost_label + '"';
  }
  if (customized_cost_formula) {
    attributesString += ' customized_cost_formula="' + customized_cost_formula + '"';
  }
  if (show_result_map) {
    attributesString += ' show_result_map';
  }
  if (show_result_scheme) {
    attributesString += ' show_result_scheme';
  }
  if (calculate_instantly) {
    attributesString += ' calculate_instantly';
  }
  if (only_countries) {
    attributesString += ' only_countries="' + only_countries.join(',') + '"';
  }
  if (prefer_countries) {
    attributesString += ' prefer_countries="' + prefer_countries.join(',') + '"';
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, " [crp ", attributesString, "] ");
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"car-route-planner/block","version":"0.1.0","title":"Car Route Planner","category":"widgets","icon":"car","description":"Calculator of various values for route, such as length, driving time, fuel amount and cost, customized cost.","attributes":{"mode":{"type":"string","enum":["simple","advanced"],"default":"simple"},"language":{"type":"string","default":"en"},"currency":{"type":"string","default":"USD"},"measure":{"type":"string","enum":["metric","imperial","us_cust"],"default":"metric"},"textColor":{"type":"string","default":"#000000"},"background_color":{"type":"string","default":"#ffffff"},"accent_color":{"type":"string","default":"#269adb"},"disable_font_auto_tuning":{"type":"boolean","default":false},"font_family":{"type":"string","default":"Open Sans"},"font_size":{"type":"string","default":"1rem"},"default_from":{"type":"string","default":""},"hide_from":{"type":"boolean","default":false},"default_to":{"type":"string","default":""},"hide_to":{"type":"boolean","default":false},"default_via":{"type":"string","default":""},"show_via":{"type":"boolean","default":true},"show_fuel_calc":{"type":"boolean","default":true},"default_fuel_consumption":{"type":"string","default":""},"default_fuel_price":{"type":"string","default":""},"show_speed_profile":{"type":"boolean","default":true},"default_speed_limit_motorway":{"type":"string","default":""},"default_speed_limit_other":{"type":"string","default":""},"show_result_length":{"type":"boolean","default":true},"show_result_driving_time":{"type":"boolean","default":true},"show_result_fuel_amount":{"type":"boolean","default":true},"show_result_fuel_cost":{"type":"boolean","default":true},"show_result_customized_cost":{"type":"boolean","default":false},"customized_cost_formula":{"type":"string","default":""},"customized_cost_label":{"type":"string","default":""},"show_result_map":{"type":"boolean","default":true},"show_result_scheme":{"type":"boolean","default":true},"calculate_instantly":{"type":"boolean","default":false},"only_countries":{"type":"array","default":[]},"prefer_countries":{"type":"array","default":[]}},"example":{},"supports":{"html":false},"textdomain":"car-route-planner","editorScript":"file:./index.js","editorStyle":"file:./editor.css","style":"file:./style-index.css"}');

/***/ }),

/***/ "./src/config.json":
/*!*************************!*\
  !*** ./src/config.json ***!
  \*************************/
/***/ (function(module) {

module.exports = JSON.parse('{"i18nSettings":[{"hreflang":"en","language":"en","currency":"USD","measurement":"us_cust","url":"https://www.drivebestway.com","submitUrl":"https://www.drivebestway.com/distance/","default":true},{"hreflang":"en-CA","language":"en","currency":"CAD","measurement":"metric","url":"https://ca.drivebestway.com","submitUrl":"https://ca.drivebestway.com/distance/"},{"hreflang":"es","language":"es","currency":"MXN","measurement":"metric","url":"https://www.mejoresrutas.com","submitUrl":"https://www.mejoresrutas.com/distancia/"},{"hreflang":"pt","language":"pt","currency":"BRL","measurement":"metric","url":"https://www.melhoresrotas.com","submitUrl":"https://www.melhoresrotas.com/distancia/"},{"hreflang":"en-AU","language":"en","currency":"AUD","measurement":"metric","url":"https://au.drivebestway.com","submitUrl":"https://au.drivebestway.com/distance/"},{"hreflang":"en-GB","language":"en","currency":"GBP","measurement":"metric","url":"https://gb.drivebestway.com","submitUrl":"https://gb.drivebestway.com/distance/"},{"hreflang":"es-ES","language":"es","currency":"EUR","measurement":"metric","url":"https://es.mejoresrutas.com","submitUrl":"https://es.mejoresrutas.com/distancia/"},{"hreflang":"es-AR","language":"es","currency":"ARS","measurement":"metric","url":"https://ar.mejoresrutas.com","submitUrl":"https://ar.mejoresrutas.com/distancia/"},{"hreflang":"es-CO","language":"es","currency":"COP","measurement":"metric","url":"https://co.mejoresrutas.com","submitUrl":"https://co.mejoresrutas.com/distancia/"},{"hreflang":"es-US","language":"es","currency":"USD","measurement":"us_cust","url":"https://us.mejoresrutas.com","submitUrl":"https://us.mejoresrutas.com/distancia/"},{"hreflang":"es-CL","language":"es","currency":"CLP","measurement":"metric","url":"https://cl.mejoresrutas.com","submitUrl":"https://cl.mejoresrutas.com/distancia/"},{"hreflang":"es-PE","language":"es","currency":"PEN","measurement":"metric","url":"https://pe.mejoresrutas.com","submitUrl":"https://pe.mejoresrutas.com/distancia/"},{"hreflang":"es-VE","language":"es","currency":"VEF","measurement":"metric","url":"https://ve.mejoresrutas.com","submitUrl":"https://ve.mejoresrutas.com/distancia/"},{"hreflang":"es-BR","language":"es","currency":"BRL","measurement":"metric","url":"https://br.mejoresrutas.com","submitUrl":"https://br.mejoresrutas.com/distancia/"},{"hreflang":"pt-PT","language":"pt","currency":"EUR","measurement":"metric","url":"https://pt.melhoresrotas.com","submitUrl":"https://pt.melhoresrotas.com/distancia/"},{"hreflang":"fr","language":"fr","currency":"EUR","measurement":"metric","url":"https://www.bonnesroutes.com","submitUrl":"https://www.bonnesroutes.com/distance/"},{"hreflang":"fr-CA","language":"fr","currency":"CAD","measurement":"metric","url":"https://ca.bonnesroutes.com","submitUrl":"https://ca.bonnesroutes.com/distance/"},{"hreflang":"de","language":"de","currency":"EUR","measurement":"metric","url":"https://www.besterouten.com","submitUrl":"https://www.besterouten.com/entfernung/"},{"hreflang":"pl","language":"pl","currency":"PLN","measurement":"metric","url":"https://www.najlepszetrasy.com","submitUrl":"https://www.najlepszetrasy.com/odleglosc/"},{"hreflang":"cs","language":"cs","currency":"CZK","measurement":"metric","url":"https://www.dobracesta.com","submitUrl":"https://www.dobracesta.com/vzdalenost/"},{"hreflang":"it","language":"it","currency":"EUR","measurement":"metric","url":"https://www.percorsomigliore.com","submitUrl":"https://www.percorsomigliore.com/distanza/"},{"hreflang":"ms","language":"ms","currency":"MYR","measurement":"metric","url":"https://www.pandujalanterbaik.com","submitUrl":"https://www.pandujalanterbaik.com/jarak/"},{"hreflang":"nl","language":"nl","currency":"EUR","measurement":"metric","url":"https://www.besteroutes.com","submitUrl":"https://www.besteroutes.com/afstand/"},{"hreflang":"tr","language":"tr","currency":"TRY","measurement":"metric","url":"https://www.duzgunyolusec.com","submitUrl":"https://www.duzgunyolusec.com/mesafe/"},{"hreflang":"nl-BE","language":"nl","currency":"EUR","measurement":"metric","url":"https://be.besteroutes.com","submitUrl":"https://be.besteroutes.com/afstand/"},{"hreflang":"de-BE","language":"de","currency":"EUR","measurement":"metric","url":"https://be.besterouten.com","submitUrl":"https://be.besterouten.com/entfernung/"},{"hreflang":"fr-BE","language":"fr","currency":"EUR","measurement":"metric","url":"https://be.bonnesroutes.com","submitUrl":"https://be.bonnesroutes.com/distance/"},{"hreflang":"fr-CH","language":"fr","currency":"EUR","measurement":"metric","url":"https://ch.bonnesroutes.com","submitUrl":"https://ch.bonnesroutes.com/distance/"},{"hreflang":"de-CH","language":"de","currency":"EUR","measurement":"metric","url":"https://ch.besterouten.com","submitUrl":"https://ch.besterouten.com/entfernung/"},{"hreflang":"de-AT","language":"de","currency":"EUR","measurement":"metric","url":"https://at.besterouten.com","submitUrl":"https://at.besterouten.com/entfernung/"},{"hreflang":"uz","language":"uz","currency":"UZS","measurement":"metric","url":"https://www.marshrutlar.uz","submitUrl":"https://www.marshrutlar.uz/marshrut/"}],"fonts":["ABeeZee","Abel","Abril Fatface","Aclonica","Acme","Actor","Adamina","Advent Pro","Aguafina Script","Akronim","Aladin","Aldrich","Alef","Alegreya","Alegreya SC","Alegreya Sans","Alegreya Sans SC","Alex Brush","Alfa Slab One","Alice","Alike","Alike Angular","Allan","Allerta","Allerta Stencil","Allura","Almendra","Almendra Display","Almendra SC","Amarante","Amaranth","Amatic SC","Amethysta","Amiri","Anaheim","Andada","Andika","Angkor","Annie Use Your Telescope","Anonymous Pro","Antic","Antic Didone","Antic Slab","Anton","Arapey","Arbutus","Arbutus Slab","Architects Daughter","Archivo Black","Archivo Narrow","Arimo","Arizonia","Armata","Artifika","Arvo","Asap","Asset","Astloch","Asul","Atomic Age","Aubrey","Audiowide","Autour One","Average","Average Sans","Averia Gruesa Libre","Averia Libre","Averia Sans Libre","Averia Serif Libre","Bad Script","Balthazar","Bangers","Basic","Battambang","Baumans","Bayon","Belgrano","Belleza","BenchNine","Bentham","Berkshire Swash","Bevan","Bigelow Rules","Bigshot One","Bilbo","Bilbo Swash Caps","Biryani","Bitter","Black Ops One","Bokor","Bonbon","Boogaloo","Bowlby One","Bowlby One SC","Brawler","Bree Serif","Bubblegum Sans","Bubbler One","Buda","Buenard","Butcherman","Butterfly Kids","Cabin","Cabin Condensed","Cabin Sketch","Caesar Dressing","Cagliostro","Calligraffitti","Cambay","Cambo","Candal","Cantarell","Cantata One","Cantora One","Capriola","Cardo","Carme","Carrois Gothic","Carrois Gothic SC","Carter One","Caudex","Cedarville Cursive","Ceviche One","Changa One","Chango","Chau Philomene One","Chela One","Chelsea Market","Chenla","Cherry Cream Soda","Cherry Swash","Chewy","Chicle","Chivo","Cinzel","Cinzel Decorative","Clicker Script","Coda","Coda Caption","Codystar","Combo","Comfortaa","Coming Soon","Concert One","Condiment","Content","Contrail One","Convergence","Cookie","Copse","Corben","Courgette","Cousine","Coustard","Covered By Your Grace","Crafty Girls","Creepster","Crete Round","Crimson Text","Croissant One","Crushed","Cuprum","Cutive","Cutive Mono","Damion","Dancing Script","Dangrek","Dawning of a New Day","Days One","Dekko","Delius","Delius Swash Caps","Delius Unicase","Della Respira","Denk One","Devonshire","Dhurjati","Didact Gothic","Diplomata","Diplomata SC","Domine","Donegal One","Doppio One","Dorsa","Dosis","Dr Sugiyama","Droid Sans","Droid Sans Mono","Droid Serif","Duru Sans","Dynalight","EB Garamond","Eagle Lake","Eater","Economica","Ek Mukta","Electrolize","Elsie","Elsie Swash Caps","Emblema One","Emilys Candy","Engagement","Englebert","Enriqueta","Erica One","Esteban","Euphoria Script","Ewert","Exo","Exo 2","Expletus Sans","Fanwood Text","Fascinate","Fascinate Inline","Faster One","Fasthand","Fauna One","Federant","Federo","Felipa","Fenix","Finger Paint","Fira Mono","Fira Sans","Fjalla One","Fjord One","Flamenco","Flavors","Fondamento","Fontdiner Swanky","Forum","Francois One","Freckle Face","Fredericka the Great","Fredoka One","Freehand","Fresca","Frijole","Fruktur","Fugaz One","GFS Didot","GFS Neohellenic","Gabriela","Gafata","Galdeano","Galindo","Gentium Basic","Gentium Book Basic","Geo","Geostar","Geostar Fill","Germania One","Gidugu","Gilda Display","Give You Glory","Glass Antiqua","Glegoo","Gloria Hallelujah","Goblin One","Gochi Hand","Gorditas","Goudy Bookletter 1911","Graduate","Grand Hotel","Gravitas One","Great Vibes","Griffy","Gruppo","Gudea","Gurajada","Habibi","Halant","Hammersmith One","Hanalei","Hanalei Fill","Handlee","Hanuman","Happy Monkey","Headland One","Henny Penny","Herr Von Muellerhoff","Hind","Holtwood One SC","Homemade Apple","Homenaje","IM Fell DW Pica","IM Fell DW Pica SC","IM Fell Double Pica","IM Fell Double Pica SC","IM Fell English","IM Fell English SC","IM Fell French Canon","IM Fell French Canon SC","IM Fell Great Primer","IM Fell Great Primer SC","Iceberg","Iceland","Imprima","Inconsolata","Inder","Indie Flower","Inika","Irish Grover","Istok Web","Italiana","Italianno","Jacques Francois","Jacques Francois Shadow","Jaldi","Jim Nightshade","Jockey One","Jolly Lodger","Josefin Sans","Josefin Slab","Joti One","Judson","Julee","Julius Sans One","Junge","Jura","Just Another Hand","Just Me Again Down Here","Kalam","Kameron","Kantumruy","Karla","Karma","Kaushan Script","Kavoon","Kdam Thmor","Keania One","Kelly Slab","Kenia","Khand","Khmer","Khula","Kite One","Knewave","Kotta One","Koulen","Kranky","Kreon","Kristi","Krona One","La Belle Aurore","Laila","Lakki Reddy","Lancelot","Lateef","Lato","League Script","Leckerli One","Ledger","Lekton","Lemon","Libre Baskerville","Life Savers","Lilita One","Lily Script One","Limelight","Linden Hill","Lobster","Lobster Two","Londrina Outline","Londrina Shadow","Londrina Sketch","Londrina Solid","Lora","Love Ya Like A Sister","Loved by the King","Lovers Quarrel","Luckiest Guy","Lusitana","Lustria","Macondo","Macondo Swash Caps","Magra","Maiden Orange","Mako","Mallanna","Mandali","Marcellus","Marcellus SC","Marck Script","Margarine","Marko One","Marmelad","Martel","Martel Sans","Marvel","Mate","Mate SC","Maven Pro","McLaren","Meddon","MedievalSharp","Medula One","Megrim","Meie Script","Merienda","Merienda One","Merriweather","Merriweather Sans","Metal","Metal Mania","Metamorphous","Metrophobic","Michroma","Milonga","Miltonian","Miltonian Tattoo","Miniver","Miss Fajardose","Modak","Modern Antiqua","Molengo","Molle","Monda","Monofett","Monoton","Monsieur La Doulaise","Montaga","Montez","Montserrat","Montserrat Alternates","Montserrat Subrayada","Moul","Moulpali","Mountains of Christmas","Mouse Memoirs","Mr Bedfort","Mr Dafoe","Mr De Haviland","Mrs Saint Delafield","Mrs Sheppards","Muli","Mystery Quest","NTR","Neucha","Neuton","New Rocker","News Cycle","Niconne","Nixie One","Nobile","Nokora","Norican","Nosifer","Nothing You Could Do","Noticia Text","Noto Sans","Noto Serif","Nova Cut","Nova Flat","Nova Mono","Nova Oval","Nova Round","Nova Script","Nova Slim","Nova Square","Numans","Nunito","Odor Mean Chey","Offside","Old Standard TT","Oldenburg","Oleo Script","Oleo Script Swash Caps","Open Sans","Open Sans Condensed","Oranienbaum","Orbitron","Oregano","Orienta","Original Surfer","Oswald","Over the Rainbow","Overlock","Overlock SC","Ovo","Oxygen","Oxygen Mono","PT Mono","PT Sans","PT Sans Caption","PT Sans Narrow","PT Serif","PT Serif Caption","Pacifico","Palanquin","Palanquin Dark","Paprika","Parisienne","Passero One","Passion One","Pathway Gothic One","Patrick Hand","Patrick Hand SC","Patua One","Paytone One","Peddana","Peralta","Permanent Marker","Petit Formal Script","Petrona","Philosopher","Piedra","Pinyon Script","Pirata One","Plaster","Play","Playball","Playfair Display","Playfair Display SC","Podkova","Poiret One","Poller One","Poly","Pompiere","Pontano Sans","Port Lligat Sans","Port Lligat Slab","Pragati Narrow","Prata","Preahvihear","Press Start 2P","Princess Sofia","Prociono","Prosto One","Puritan","Purple Purse","Quando","Quantico","Quattrocento","Quattrocento Sans","Questrial","Quicksand","Quintessential","Qwigley","Racing Sans One","Radley","Rajdhani","Raleway","Raleway Dots","Ramabhadra","Ramaraja","Rambla","Rammetto One","Ranchers","Rancho","Ranga","Rationale","Ravi Prakash","Redressed","Reenie Beanie","Revalia","Ribeye","Ribeye Marrow","Righteous","Risque","Roboto","Roboto Condensed","Roboto Slab","Rochester","Rock Salt","Rokkitt","Romanesco","Ropa Sans","Rosario","Rosarivo","Rouge Script","Rozha One","Rubik Mono One","Rubik One","Ruda","Rufina","Ruge Boogie","Ruluko","Rum Raisin","Ruslan Display","Russo One","Ruthie","Rye","Sacramento","Sail","Salsa","Sanchez","Sancreek","Sansita One","Sarina","Sarpanch","Satisfy","Scada","Scheherazade","Schoolbell","Seaweed Script","Sevillana","Seymour One","Shadows Into Light","Shadows Into Light Two","Shanti","Share","Share Tech","Share Tech Mono","Shojumaru","Short Stack","Siemreap","Sigmar One","Signika","Signika Negative","Simonetta","Sintony","Sirin Stencil","Six Caps","Skranji","Slabo 13px","Slabo 27px","Slackey","Smokum","Smythe","Sniglet","Snippet","Snowburst One","Sofadi One","Sofia","Sonsie One","Sorts Mill Goudy","Source Code Pro","Source Sans Pro","Source Serif Pro","Special Elite","Spicy Rice","Spinnaker","Spirax","Squada One","Sree Krushnadevaraya","Stalemate","Stalinist One","Stardos Stencil","Stint Ultra Condensed","Stint Ultra Expanded","Stoke","Strait","Sue Ellen Francisco","Sunshiney","Supermercado One","Suranna","Suravaram","Suwannaphum","Swanky and Moo Moo","Syncopate","Tangerine","Taprom","Tauri","Teko","Telex","Tenali Ramakrishna","Tenor Sans","Text Me One","The Girl Next Door","Tienne","Timmana","Tinos","Titan One","Titillium Web","Trade Winds","Trocchi","Trochut","Trykker","Tulpen One","Ubuntu","Ubuntu Condensed","Ubuntu Mono","Ultra","Uncial Antiqua","Underdog","Unica One","UnifrakturCook","UnifrakturMaguntia","Unkempt","Unlock","Unna","VT323","Vampiro One","Varela","Varela Round","Vast Shadow","Vesper Libre","Vibur","Vidaloka","Viga","Voces","Volkhov","Vollkorn","Voltaire","Waiting for the Sunrise","Wallpoet","Walter Turncoat","Warnes","Wellfleet","Wendy One","Wire One","Yanone Kaffeesatz","Yellowtail","Yeseva One","Yesteryear","Zeyada"],"languages":["en","es","pt","fr","de","pl","cs","it","ms","nl","tr","uz"],"currencies":["ARS","AUD","BRL","CAD","CHF","CLP","CNY","COP","CZK","DKK","DOP","EUR","GBP","INR","IRR","MXN","MYR","NGN","PEN","PHP","PLN","RUB","SEK","TRY","USD","UZS","VEF","ZAR"],"countries":[{"iso":"AF","name":"Afghánistán"},{"iso":"AL","name":"Albánie"},{"iso":"DZ","name":"Alžírsko"},{"iso":"AD","name":"Andorra"},{"iso":"AO","name":"Angola"},{"iso":"AI","name":"Anguilla"},{"iso":"AG","name":"Antigua a Barbuda"},{"iso":"AR","name":"Argentina"},{"iso":"AM","name":"Arménie"},{"iso":"AU","name":"Austrálie"},{"iso":"AT","name":"Rakousko"},{"iso":"AZ","name":"Ázerbájdžán"},{"iso":"BH","name":"Bahrajn"},{"iso":"BD","name":"Bangladéš"},{"iso":"BB","name":"Barbados"},{"iso":"BY","name":"Bělorusko"},{"iso":"BE","name":"Belgie"},{"iso":"BZ","name":"Belize"},{"iso":"BJ","name":"Benin"},{"iso":"BM","name":"Bermudy"},{"iso":"BT","name":"Bhútán"},{"iso":"BO","name":"Bolívie"},{"iso":"BA","name":"Bosna a Hercegovina"},{"iso":"BW","name":"Botswana"},{"iso":"BR","name":"Brazílie"},{"iso":"IO","name":"Britské indickooceánské území"},{"iso":"VG","name":"Britské Panenské ostrovy"},{"iso":"BN","name":"Brunej"},{"iso":"BG","name":"Bulharsko"},{"iso":"BF","name":"Burkina Faso"},{"iso":"BI","name":"Burundi"},{"iso":"KH","name":"Kambodža"},{"iso":"CM","name":"Kamerun"},{"iso":"CA","name":"Kanada"},{"iso":"CV","name":"Kapverdy"},{"iso":"KY","name":"Kajmanské ostrovy"},{"iso":"CF","name":"Středoafrická republika"},{"iso":"TD","name":"Čad"},{"iso":"CL","name":"Chile"},{"iso":"CN","name":"Čína"},{"iso":"CO","name":"Kolumbie"},{"iso":"KM","name":"Komory"},{"iso":"CG","name":"Republika Kongo"},{"iso":"CK","name":"Cookovy ostrovy"},{"iso":"CR","name":"Kostarika"},{"iso":"HR","name":"Chorvatsko"},{"iso":"CU","name":"Kuba"},{"iso":"CY","name":"Kypr"},{"iso":"CZ","name":"Česko"},{"iso":"CI","name":"Pobřeží slonoviny"},{"iso":"CD","name":"Demokratická republika Kongo"},{"iso":"DK","name":"Dánsko"},{"iso":"DJ","name":"Džibutsko"},{"iso":"DM","name":"Dominika"},{"iso":"DO","name":"Dominikánská republika"},{"iso":"TL","name":"Východní Timor"},{"iso":"EC","name":"Ekvádor"},{"iso":"EG","name":"Egypt"},{"iso":"SV","name":"Salvador"},{"iso":"GQ","name":"Rovníková Guinea"},{"iso":"ER","name":"Eritrea"},{"iso":"EE","name":"Estonsko"},{"iso":"ET","name":"Etiopie"},{"iso":"FK","name":"Falklandy"},{"iso":"FO","name":"Faerské ostrovy"},{"iso":"FM","name":"Mikronésie"},{"iso":"FJ","name":"Fidži"},{"iso":"FI","name":"Finsko"},{"iso":"FR","name":"Francie"},{"iso":"GA","name":"Gabon"},{"iso":"GM","name":"Gambie"},{"iso":"GE","name":"Gruzie"},{"iso":"DE","name":"Deutschland"},{"iso":"GH","name":"Ghana"},{"iso":"GI","name":"Gibraltar"},{"iso":"GR","name":"Řecko"},{"iso":"GL","name":"Grónsko"},{"iso":"GD","name":"Grenada"},{"iso":"GT","name":"Guatemala"},{"iso":"GG","name":"Guernsey"},{"iso":"GN","name":"Guinea"},{"iso":"GW","name":"Guinea-Bissau"},{"iso":"GY","name":"Guyana"},{"iso":"HT","name":"Haiti"},{"iso":"HN","name":"Honduras"},{"iso":"HU","name":"Maďarsko"},{"iso":"IS","name":"Island"},{"iso":"IN","name":"Indie"},{"iso":"ID","name":"Indonésie"},{"iso":"IR","name":"Írán"},{"iso":"IQ","name":"Irák"},{"iso":"IE","name":"Irsko"},{"iso":"IM","name":"Man"},{"iso":"IL","name":"Izrael"},{"iso":"IT","name":"Itálie"},{"iso":"JM","name":"Jamajka"},{"iso":"JP","name":"Japonsko"},{"iso":"JE","name":"Jersey"},{"iso":"JO","name":"Jordánsko"},{"iso":"KZ","name":"Kazachstán"},{"iso":"KE","name":"Keňa"},{"iso":"KI","name":"Kiribati"},{"iso":"KW","name":"Kuvajt"},{"iso":"KG","name":"Kyrgyzstán"},{"iso":"LA","name":"Laos"},{"iso":"LV","name":"Lotyšsko"},{"iso":"LB","name":"Libanon"},{"iso":"LS","name":"Lesotho"},{"iso":"LR","name":"Libérie"},{"iso":"LY","name":"Libye"},{"iso":"LI","name":"Lichtenštejnsko"},{"iso":"LT","name":"Litva"},{"iso":"LU","name":"Lucembursko"},{"iso":"MK","name":"Severní Makedonie"},{"iso":"MG","name":"Madagaskar"},{"iso":"MW","name":"Malawi"},{"iso":"MY","name":"Malajsie"},{"iso":"MV","name":"Maledivy"},{"iso":"ML","name":"Mali"},{"iso":"MT","name":"Malta"},{"iso":"MH","name":"Aelōn̄ in M̧ajeļ"},{"iso":"MR","name":"Mauritánie"},{"iso":"MU","name":"Mauricius"},{"iso":"MX","name":"Mexiko"},{"iso":"MD","name":"Moldavsko"},{"iso":"MC","name":"Monako"},{"iso":"MN","name":"Mongolsko"},{"iso":"ME","name":"Černá Hora"},{"iso":"MS","name":"Montserrat"},{"iso":"MA","name":"Maroko"},{"iso":"MZ","name":"Mosambik"},{"iso":"MM","name":"Myanmar"},{"iso":"NA","name":"Namibie"},{"iso":"NR","name":"Nauru"},{"iso":"NP","name":"Nepál"},{"iso":"NZ","name":"Nový Zéland"},{"iso":"NI","name":"Nikaragua"},{"iso":"NE","name":"Niger"},{"iso":"NG","name":"Nigérie"},{"iso":"NU","name":"Niue"},{"iso":"KP","name":"Severní Korea"},{"iso":"NO","name":"Norsko"},{"iso":"OM","name":"Omán"},{"iso":"PK","name":"Pákistán"},{"iso":"PW","name":"Palau"},{"iso":"PS","name":"الأراضي الفلسطينية"},{"iso":"PA","name":"Panama"},{"iso":"PG","name":"Papua Nová Guinea"},{"iso":"PY","name":"Paraguay"},{"iso":"PE","name":"Peru"},{"iso":"PH","name":"Filipíny"},{"iso":"PN","name":"Pitcairnovy ostrovy"},{"iso":"PL","name":"Polsko"},{"iso":"PT","name":"Portugalsko"},{"iso":"PR","name":"name"},{"iso":"QA","name":"Katar"},{"iso":"XK","name":"Kosovo"},{"iso":"RO","name":"Rumunsko"},{"iso":"RU","name":"Rusko"},{"iso":"RW","name":"Rwanda"},{"iso":"SH","name":"Svatá Helena, Ascension a Tristan da Cunha"},{"iso":"KN","name":"Svatý Kryštof a Nevis"},{"iso":"LC","name":"Svatá Lucie"},{"iso":"VC","name":"Svatý Vincent a Grenadiny"},{"iso":"WS","name":"Samoa"},{"iso":"SM","name":"San Marino"},{"iso":"SA","name":"Saúdská Arábie"},{"iso":"SN","name":"Senegal"},{"iso":"RS","name":"Srbsko"},{"iso":"SC","name":"Seychely"},{"iso":"SL","name":"Sierra Leone"},{"iso":"SG","name":"Singapur"},{"iso":"SK","name":"Slovensko"},{"iso":"SI","name":"Slovinsko"},{"iso":"SB","name":"Šalomounovy ostrovy"},{"iso":"SO","name":"Somálsko"},{"iso":"ZA","name":"Jihoafrická republika"},{"iso":"GS","name":"Jižní Georgie a Jižní Sandwichovy ostrovy"},{"iso":"KR","name":"Jižní Korea"},{"iso":"SS","name":"Jižní Súdán"},{"iso":"ES","name":"Španělsko"},{"iso":"LK","name":"Srí Lanka"},{"iso":"SD","name":"Súdán"},{"iso":"SR","name":"Surinam"},{"iso":"SZ","name":"Svazijsko"},{"iso":"SE","name":"Švédsko"},{"iso":"CH","name":"Švýcarsko"},{"iso":"SY","name":"Sýrie"},{"iso":"ST","name":"Svatý Tomáš a Princův ostrov"},{"iso":"TW","name":"Tchaj-wan"},{"iso":"TJ","name":"Tádžikistán"},{"iso":"TZ","name":"Tanzanie"},{"iso":"TH","name":"Thajsko"},{"iso":"BS","name":"Bahamy"},{"iso":"NL","name":"Nizozemsko"},{"iso":"TG","name":"Togo"},{"iso":"TK","name":"Tokelau"},{"iso":"TO","name":"Tonga"},{"iso":"TT","name":"Trinidad a Tobago"},{"iso":"TN","name":"Tunisko"},{"iso":"TR","name":"Turecko"},{"iso":"TM","name":"Turkmenistán"},{"iso":"TC","name":"Turks a Caicos"},{"iso":"TV","name":"Tuvalu"},{"iso":"UG","name":"Uganda"},{"iso":"UA","name":"Ukrajina"},{"iso":"AE","name":"Spojené arabské emiráty"},{"iso":"GB","name":"Spojené království"},{"iso":"US","name":"Spojené státy"},{"iso":"UY","name":"Uruguay"},{"iso":"UZ","name":"Uzbekistán"},{"iso":"VU","name":"Vanuatu"},{"iso":"VA","name":"Vatikán"},{"iso":"VE","name":"Venezuela"},{"iso":"VN","name":"Vietnam"},{"iso":"YE","name":"Jemen"},{"iso":"ZM","name":"Zambie"},{"iso":"ZW","name":"Zimbabwe"},{"iso":"NF","name":"name"}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcar_route_planner"] = self["webpackChunkcar_route_planner"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map