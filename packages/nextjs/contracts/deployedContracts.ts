/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  80001: {
    upDevAccountOwnership: {
      address: "0xa186e9A3ABaB4d3fb317f434Bc4fd6164878b0C4",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "nftCollectionName",
              type: "string",
            },
            {
              internalType: "string",
              name: "nftCollectionSymbol",
              type: "string",
            },
            {
              internalType: "address",
              name: "contractOwner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "ERC725Y_DataKeysValuesEmptyArray",
          type: "error",
        },
        {
          inputs: [],
          name: "ERC725Y_DataKeysValuesLengthMismatch",
          type: "error",
        },
        {
          inputs: [],
          name: "ERC725Y_MsgValueDisallowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "storedData",
              type: "bytes",
            },
          ],
          name: "InvalidExtensionAddress",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "InvalidFunctionSelector",
          type: "error",
        },
        {
          inputs: [],
          name: "LSP4TokenNameNotEditable",
          type: "error",
        },
        {
          inputs: [],
          name: "LSP4TokenSymbolNotEditable",
          type: "error",
        },
        {
          inputs: [],
          name: "LSP8CannotSendToAddressZero",
          type: "error",
        },
        {
          inputs: [],
          name: "LSP8CannotSendToSelf",
          type: "error",
        },
        {
          inputs: [],
          name: "LSP8CannotUseAddressZeroAsOperator",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "tokenId",
              type: "bytes32",
            },
          ],
          name: "LSP8NonExistentTokenId",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "tokenId",
              type: "bytes32",
            },
          ],
          name: "LSP8NonExistingOperator",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "tokenOwner",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "tokenId",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "caller",
              type: "address",
            },
          ],
          name: "LSP8NotTokenOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "tokenReceiver",
              type: "address",
            },
          ],
          name: "LSP8NotifyTokenReceiverContractMissingLSP1Interface",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "tokenReceiver",
              type: "address",
            },
          ],
          name: "LSP8NotifyTokenReceiverIsEOA",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "tokenId",
              type: "bytes32",
            },
          ],
          name: "LSP8OperatorAlreadyAuthorized",
          type: "error",
        },
        {
          inputs: [],
          name: "LSP8TokenContractCannotHoldValue",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "tokenId",
              type: "bytes32",
            },
          ],
          name: "LSP8TokenIdAlreadyMinted",
          type: "error",
        },
        {
          inputs: [],
          name: "LSP8TokenIdTypeNotEditable",
          type: "error",
        },
        {
          inputs: [],
          name: "LSP8TokenOwnerCannotBeOperator",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "functionSelector",
              type: "bytes4",
            },
          ],
          name: "NoExtensionFoundForFunctionSelector",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "callerAddress",
              type: "address",
            },
          ],
          name: "OwnableCallerNotTheOwner",
          type: "error",
        },
        {
          inputs: [],
          name: "OwnableCannotSetZeroAddressAsOwner",
          type: "error",
        },
        {
          inputs: [],
          name: "Soulbound",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "tokenOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "tokenId",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "operatorNotificationData",
              type: "bytes",
            },
          ],
          name: "AuthorizedOperator",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "dataKey",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "dataValue",
              type: "bytes",
            },
          ],
          name: "DataChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "tokenOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "tokenId",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "notified",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "operatorNotificationData",
              type: "bytes",
            },
          ],
          name: "RevokedOperator",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "tokenId",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "force",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          stateMutability: "payable",
          type: "fallback",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "tokenId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "operatorNotificationData",
              type: "bytes",
            },
          ],
          name: "authorizeOperator",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "tokenOwner",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "dataKey",
              type: "bytes32",
            },
          ],
          name: "getData",
          outputs: [
            {
              internalType: "bytes",
              name: "dataValue",
              type: "bytes",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32[]",
              name: "dataKeys",
              type: "bytes32[]",
            },
          ],
          name: "getDataBatch",
          outputs: [
            {
              internalType: "bytes[]",
              name: "dataValues",
              type: "bytes[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "tokenId",
              type: "bytes32",
            },
          ],
          name: "getOperatorsOf",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "tokenId",
              type: "bytes32",
            },
          ],
          name: "isOperatorFor",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "tokenId",
              type: "bytes32",
            },
            {
              internalType: "bool",
              name: "force",
              type: "bool",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "tokenId",
              type: "bytes32",
            },
            {
              internalType: "bool",
              name: "notify",
              type: "bool",
            },
            {
              internalType: "bytes",
              name: "operatorNotificationData",
              type: "bytes",
            },
          ],
          name: "revokeOperator",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "dataKey",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "dataValue",
              type: "bytes",
            },
          ],
          name: "setData",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32[]",
              name: "dataKeys",
              type: "bytes32[]",
            },
            {
              internalType: "bytes[]",
              name: "dataValues",
              type: "bytes[]",
            },
          ],
          name: "setDataBatch",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "tokenOwner",
              type: "address",
            },
          ],
          name: "tokenIdsOf",
          outputs: [
            {
              internalType: "bytes32[]",
              name: "",
              type: "bytes32[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "tokenId",
              type: "bytes32",
            },
          ],
          name: "tokenOwnerOf",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "tokenId",
              type: "bytes32",
            },
            {
              internalType: "bool",
              name: "force",
              type: "bool",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "transfer",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address[]",
              name: "from",
              type: "address[]",
            },
            {
              internalType: "address[]",
              name: "to",
              type: "address[]",
            },
            {
              internalType: "bytes32[]",
              name: "tokenId",
              type: "bytes32[]",
            },
            {
              internalType: "bool[]",
              name: "force",
              type: "bool[]",
            },
            {
              internalType: "bytes[]",
              name: "data",
              type: "bytes[]",
            },
          ],
          name: "transferBatch",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {
        authorizeOperator:
          "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/presets/ILSP8Mintable.sol",
        balanceOf: "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/presets/ILSP8Mintable.sol",
        getData: "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/presets/ILSP8Mintable.sol",
        getDataBatch: "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/presets/ILSP8Mintable.sol",
        getOperatorsOf: "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/presets/ILSP8Mintable.sol",
        isOperatorFor: "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/presets/ILSP8Mintable.sol",
        mint: "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/presets/ILSP8Mintable.sol",
        revokeOperator: "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/presets/ILSP8Mintable.sol",
        setData: "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/presets/ILSP8Mintable.sol",
        setDataBatch: "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/presets/ILSP8Mintable.sol",
        supportsInterface:
          "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/presets/ILSP8Mintable.sol",
        tokenIdsOf: "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/presets/ILSP8Mintable.sol",
        tokenOwnerOf: "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/presets/ILSP8Mintable.sol",
        totalSupply: "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/presets/ILSP8Mintable.sol",
        transfer: "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/presets/ILSP8Mintable.sol",
        transferBatch: "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/presets/ILSP8Mintable.sol",
      },
    },
    upDevFunctionsConsumer: {
      address: "0xcBfc1429859386A1d6Aa9EA732bAAf5D1f1a3628",
      abi: [
        {
          inputs: [
            {
              internalType: "address payable",
              name: "_collection",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AlreadyClaimed",
          type: "error",
        },
        {
          inputs: [],
          name: "EmptyArgs",
          type: "error",
        },
        {
          inputs: [],
          name: "EmptySecrets",
          type: "error",
        },
        {
          inputs: [],
          name: "EmptySource",
          type: "error",
        },
        {
          inputs: [],
          name: "NoInlineSecrets",
          type: "error",
        },
        {
          inputs: [],
          name: "OnlyRouterCanFulfill",
          type: "error",
        },
        {
          inputs: [],
          name: "SourceNameBusy",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
          ],
          name: "OwnershipTransferRequested",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "id",
              type: "bytes32",
            },
          ],
          name: "RequestFulfilled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "id",
              type: "bytes32",
            },
          ],
          name: "RequestSent",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "requestId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "up",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bool",
              name: "isOwned",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "string",
              name: "source",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "id",
              type: "string",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "Response",
          type: "event",
        },
        {
          inputs: [],
          name: "acceptOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "code",
              type: "string",
            },
            {
              internalType: "bool",
              name: "isAddressId",
              type: "bool",
            },
          ],
          name: "addSource",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "availableSources",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "tokenId",
              type: "bytes32",
            },
          ],
          name: "claimToken",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "collection",
          outputs: [
            {
              internalType: "contract upDevAccountOwnership",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getAvailableSources",
          outputs: [
            {
              components: [
                {
                  internalType: "uint16",
                  name: "id",
                  type: "uint16",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "code",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "isAddressId",
                  type: "bool",
                },
              ],
              internalType: "struct upDevFunctionsConsumer.Source[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "up",
              type: "address",
            },
          ],
          name: "getUPRequests",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "up",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "source",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "id",
                  type: "string",
                },
                {
                  internalType: "bytes32",
                  name: "tokenId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "bool",
                  name: "isFinished",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "isOwned",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "isClaimed",
                  type: "bool",
                },
              ],
              internalType: "struct upDevFunctionsConsumer.Request[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "requestId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "response",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "err",
              type: "bytes",
            },
          ],
          name: "handleOracleFulfillment",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "requiestId",
              type: "bytes32",
            },
          ],
          name: "request",
          outputs: [
            {
              internalType: "address",
              name: "up",
              type: "address",
            },
            {
              internalType: "string",
              name: "source",
              type: "string",
            },
            {
              internalType: "string",
              name: "id",
              type: "string",
            },
            {
              internalType: "bytes32",
              name: "tokenId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
            {
              internalType: "bool",
              name: "isFinished",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "isOwned",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "isClaimed",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "subscriptionId",
              type: "uint64",
            },
            {
              internalType: "bytes",
              name: "encryptedSecretsUrls",
              type: "bytes",
            },
            {
              internalType: "uint8",
              name: "donHostedSecretsSlotID",
              type: "uint8",
            },
            {
              internalType: "uint64",
              name: "donHostedSecretsVersion",
              type: "uint64",
            },
            {
              internalType: "string",
              name: "sourceName",
              type: "string",
            },
            {
              internalType: "address",
              name: "up",
              type: "address",
            },
            {
              internalType: "string",
              name: "id",
              type: "string",
            },
          ],
          name: "sendRequest",
          outputs: [
            {
              internalType: "bytes32",
              name: "requestId",
              type: "bytes32",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address payable",
              name: "_collection",
              type: "address",
            },
          ],
          name: "setCollection",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          name: "source",
          outputs: [
            {
              internalType: "uint16",
              name: "id",
              type: "uint16",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "code",
              type: "string",
            },
            {
              internalType: "bool",
              name: "isAddressId",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "tokenId",
              type: "bytes32",
            },
          ],
          name: "token",
          outputs: [
            {
              internalType: "bytes32",
              name: "requestId",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "up",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "upRequests",
          outputs: [
            {
              internalType: "bytes32",
              name: "requests",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {
        handleOracleFulfillment: "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/FunctionsClient.sol",
        acceptOwnership: "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol",
        owner: "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol",
        transferOwnership: "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol",
      },
    },
    upRegistry: {
      address: "0xB665840C5929d140494708A619dA834d944d8CBC",
      abi: [
        {
          inputs: [],
          name: "InvalidKeyManager",
          type: "error",
        },
        {
          inputs: [],
          name: "NoPermissions",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "_upByEOA",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "_ups",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_up",
              type: "address",
            },
            {
              internalType: "address",
              name: "_km",
              type: "address",
            },
            {
              internalType: "address",
              name: "_upLukso",
              type: "address",
            },
          ],
          name: "setUp",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "up",
          outputs: [
            {
              internalType: "address",
              name: "up",
              type: "address",
            },
            {
              internalType: "address",
              name: "keyManager",
              type: "address",
            },
            {
              internalType: "address",
              name: "upLukso",
              type: "address",
            },
            {
              internalType: "address",
              name: "eoa",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "eoa",
              type: "address",
            },
          ],
          name: "upByEOA",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "up",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "keyManager",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "upLukso",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "eoa",
                  type: "address",
                },
              ],
              internalType: "struct upRegistry.Profile",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "ups",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "up",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "keyManager",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "upLukso",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "eoa",
                  type: "address",
                },
              ],
              internalType: "struct upRegistry.Profile[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
