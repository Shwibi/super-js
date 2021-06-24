// Index file
// All the things will be exported from here
const Main = require("./Utils/Main");
const Tank = require("./Utils/Tank");
const Err = require("./Utils/Err");

const Stack = require("./Stack/Stack");

const Random = require("./Functions/Random");
const RandomInt = require("./Functions/RandomInt");

const IsInteger = require("./Functions/Checks/IsInteger");
const IsOdd = require("./Functions/Checks/IsOdd");
const IsEven = require("./Functions/Checks/IsEven");

const Log = require("./Functions/Log");

const ColorProps = require("./Props/Colors");
const RemoveReservedCharacters = require("./Functions/RemoveReservedCharacters");
const ReservedCharacters = require("./Props/ReservedCharacters");
const ReservedWordsArray = require("./Props/ReservedWords");
const SqueezeString = require("./Functions/SqueezeString");

module.exports = {
	Main,
	Err,
	Random,
	Stack,
	RandomInt,
	IsInteger,
	IsOdd,
	IsEven,
	Log,
	Colors: ColorProps.Colors,
	Colorize: ColorProps.colorize,
	Sandbox: {
		parser: require("./Sandbox/storageParser"),
	},
	Tank,
	RemoveReservedCharacters,
	ReservedCharacters,
	ReservedWordsArray,
	SqueezeString
};
