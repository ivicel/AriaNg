(function () {
    'use strict';

    angular.module('ariaNg').constant('ariaNgConstants', {
        title: 'AriaNg',
        appPrefix: 'AriaNg',
        optionStorageKey: 'Options',
        globalStatStorageCapacity: 120,
        taskStatStorageCapacity: 300,
        lazySaveTimeout: 500,
        errorTooltipDelay: 200
    }).constant('ariaNgFileTypes', {
        video: [
            '.3gp',
            '.3gpp',
            '.asf',
            '.asx',
            '.avi',
            '.dat',
            '.flv',
            '.m4v',
            '.mkv',
            '.mov',
            '.mp4',
            '.mpe',
            '.mpeg',
            '.mpg',
            '.rm',
            '.rmvb',
            '.vob',
            '.wmv'
        ],
        audio: [
            '.aac',
            '.amr',
            '.ape',
            '.flac',
            '.m4a',
            '.mid',
            '.mp3',
            '.ogg',
            '.ra',
            '.vqf',
            '.wav',
            '.wma'
        ],
        picture: [
            '.bmp',
            '.emf',
            '.gif',
            '.jp2',
            '.jpeg',
            '.jpg',
            '.png',
            '.psd',
            '.raw',
            '.tga',
            '.tif',
            '.tiff',
            '.wmf'
        ],
        document: [
            '.doc',
            '.docx',
            '.key',
            '.numbers',
            '.odp',
            '.ods',
            '.odt',
            '.pages',
            '.pdf',
            '.ppt',
            '.pptx',
            '.rtf',
            '.txt',
            '.vsd',
            '.vsdx',
            '.wps',
            '.xls',
            '.xlsx'
        ],
        application: [
            '.apk',
            '.bat',
            '.com',
            '.deb',
            '.dll',
            '.dmg',
            '.exe',
            '.ipa',
            '.jar',
            '.rpm',
            '.sh'
        ],
        archive: [
            '.7z',
            '.arj',
            '.bz2',
            '.cab',
            '.gz',
            '.iso',
            '.r',
            '.rar',
            '.tar',
            '.tar',
            '.z',
            '.zip'
        ]
    }).constant('ariaNgDefaultOptions', {
        language: 'en',
        title: '${downspeed}, ${upspeed} - ${title}',
        browserNotification: false, 
        rpcHost: '',
        rpcPort: '6800',
        protocol: 'http',
        secret: '',
        globalStatRefreshInterval: 1000,
        downloadTaskRefreshInterval: 1000
    });
})();
