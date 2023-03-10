const canales = [
    { nombre: "NAT GEO KIDS", channel: "3", adsl: "239.255.2.138", fca: "239.255.2.138", mpeg4: "239.255.3.50", criticidad: "3", bw: "3.5" },
    { nombre: "TOONCAST", channel: "4", adsl: "239.255.2.115", fca: "239.255.5.215", mpeg4: "239.255.5.215", criticidad: "3", bw: "3.5" },
    { nombre: "FUNBOX", channel: "5", adsl: "239.255.2.167", fca: "239.255.2.167", mpeg4: "239.255.2.167", criticidad: "4", bw: "3.5" },
    { nombre: "BABY TV", channel: "6", adsl: "239.255.2.169", fca: "239.255.2.169", mpeg4: "239.255.2.169", criticidad: "4", bw: "3.5" },
    { nombre: "NICK JUNIOR", channel: "7", adsl: "239.255.2.116", fca: "239.255.5.116", mpeg4: "239.255.5.116", criticidad: "2", bw: "3.5" },
    { nombre: "DISNEY JUNIOR", channel: "8", adsl: "239.255.2.247", fca: "239.255.2.247", mpeg4: "239.255.3.247", criticidad: "2", bw: "3.5" },
    { nombre: "DISCOVERY KIDS", channel: "9", adsl: "239.255.2.20", fca: "239.255.5.20", mpeg4: "239.255.5.20", criticidad: "2", bw: "3.5" },
    { nombre: "NICKELODEON", channel: "10", adsl: "239.255.2.62", fca: "239.255.5.144", mpeg4: "239.255.5.144", criticidad: "2", bw: "3.5" },
    { nombre: "Boomerang", channel: "11", adsl: "239.255.2.25", fca: "239.255.5.25", mpeg4: "239.255.5.25", criticidad: "3", bw: "3.5" },
    { nombre: "CARTOON NETWORK", channel: "12", adsl: "239.255.2.24", fca: "239.255.5.24", mpeg4: "239.255.3.54", criticidad: "2", bw: "3.5" },
    { nombre: "Disney XD Argentina Feed", channel: "13", adsl: "239.255.2.6", fca: "239.255.2.6", mpeg4: "239.255.3.248", criticidad: "2", bw: "3.5" },
    { nombre: "DISNEY SOUTH", channel: "14", adsl: "239.255.2.5", fca: "239.255.2.5", mpeg4: "239.255.3.246", criticidad: "2", bw: "3.5" },
    { nombre: "ETC TV", channel: "15", adsl: "239.255.2.165", fca: "239.255.2.165", mpeg4: "239.255.2.165", criticidad: "3", bw: "3.5" },
    { nombre: "TELSUR", channel: "18", adsl: "239.255.2.106", fca: "239.255.2.106", mpeg4: "239.255.2.106", criticidad: "4", bw: "3.5" },
    { nombre: "Canal 13 Cable", channel: "21", adsl: "239.255.2.131", fca: "239.255.2.25", mpeg4: "239.255.2.125", criticidad: "4", bw: "3.5" },
    { nombre: "TV+", channel: "22", adsl: "239.255.2.111", fca: "239.255.2.111", mpeg4: "239.255.2.124", criticidad: "3", bw: "3.5" },
    { nombre: "Red TV - Canal  4", channel: "24", adsl: "239.255.2.10", fca: "239.255.2.10", mpeg4: "239.255.3.123", criticidad: "2", bw: "3.5" },
    { nombre: "TVN CNCP", channel: "25", adsl: "239.255.3.72 ", fca: "239.255.5.79 / Cncp 239.255.3.73 / Tmco 239.255.3.79", mpeg4: "239.255.3.47", criticidad: "1", bw: "3.5" },
    { nombre: "TVN TMCO", channel: "25", adsl: "239.255.3.78", fca: "239.255.5.79 / Cncp 239.255.3.73 / Tmco 239.255.3.79", mpeg4: "239.255.3.47", criticidad: "1", bw: "3.5" },
    { nombre: "TVN de Chile Canal 7", channel: "25", adsl: "239.255.2.79", fca: "239.255.5.79 / Cncp 239.255.3.73 / Tmco 239.255.3.79", mpeg4: "239.255.3.47", criticidad: "1", bw: "3.5" },
    { nombre: "Megavision Canal 6", channel: "26", adsl: "239.255.2.77", fca: "239.255.3.77", mpeg4: "239.255.2.145", criticidad: "1", bw: "3.5" },
    { nombre: "Chilevision Canal 11", channel: "27", adsl: "239.255.2.76", fca: "239.255.5.76", mpeg4: "239.255.3.148", criticidad: "1", bw: "3.5" },
    { nombre: "UCTV Canal 13", channel: "28", adsl: "239.255.2.78", fca: "239.255.5.78", mpeg4: "239.255.3.155", criticidad: "1", bw: "3.5" },
    { nombre: "CANAL 9 Bio Bio", channel: "29", adsl: "239.255.2.132", fca: "239.255.2.132", mpeg4: "239.255.2.132", criticidad: "4", bw: "3.5" },
    { nombre: "VIDA SOCIAL TV", channel: "30", adsl: "239.255.3.58", fca: "239.255.3.58", mpeg4: "239.255.2.141", criticidad: "4", bw: "3.5" },
    { nombre: "CANAL TENDENCIAS PRIME", channel: "31", adsl: "239.255.5.139", fca: "239.255.5.139", mpeg4: "239.255.5.140", criticidad: "4", bw: "3.5" },
    { nombre: "UA", channel: "34", adsl: "239.255.2.134", fca: "239.255.2.134", mpeg4: "239.255.2.18", criticidad: "4", bw: "3.5" },
    { nombre: "Zona Latina", channel: "35", adsl: "239.255.2.81", fca: "239.255.2.81", mpeg4: "239.255.3.81", criticidad: "3", bw: "3.5" },
    { nombre: "Via X", channel: "36", adsl: "239.255.2.80", fca: "239.255.2.80", mpeg4: "239.255.3.80", criticidad: "3", bw: "3.5" },
    { nombre: "ARTV", channel: "37", adsl: "239.255.2.241", fca: "239.255.2.241", mpeg4: "239.255.2.241", criticidad: "4", bw: "3.5" },
    { nombre: "TVU", channel: "38", adsl: "239.255.2.133", fca: "239.255.2.133", mpeg4: "239.255.2.133", criticidad: "4", bw: "3.5" },
    { nombre: "I-NET TELEVISIÓN DIG", channel: "39", adsl: "239.255.2.140", fca: "239.255.2.140", mpeg4: "239.255.2.140", criticidad: "4", bw: "3.5" },
    { nombre: "ROCCO TV", channel: "41", adsl: "239.255.2.151", fca: "239.255.2.151", mpeg4: "239.255.2.151", criticidad: "4", bw: "3.5" },
    { nombre: "COOL TV", channel: "42", adsl: "239.255.2.150", fca: "239.255.2.150", mpeg4: "239.255.2.13", criticidad: "4", bw: "3.5" },
    { nombre: "ISB TV", channel: "44", adsl: "239.255.2.229", fca: "239.255.2.229", mpeg4: "239.255.2.229", criticidad: "4", bw: "3.5" },
    { nombre: "TELESUR", channel: "45", adsl: "239.255.2.103", fca: "239.255.2.103", mpeg4: "239.255.2.103", criticidad: "4", bw: "3.5" },
    { nombre: "OSORNO TV+.", channel: "46", adsl: "239.255.2.226", fca: "239.255.2.27", mpeg4: "239.255.2.226", criticidad: "4", bw: "3.5" },
    { nombre: "CANAL DEL SUR", channel: "47", adsl: "239.255.2.225", fca: "239.255.2.225", mpeg4: "239.255.2.225", criticidad: "4", bw: "3.5" },
    { nombre: "UFROVISION", channel: "48", adsl: "239.255.2.143", fca: "239.255.2.143", mpeg4: "239.255.3.63", criticidad: "4", bw: "3.5" },
    { nombre: "SANTA MARÍA", channel: "49", adsl: "239.255.2.240", fca: "239.255.2.240", mpeg4: "239.255.2.240", criticidad: "4", bw: "3.5" },
    { nombre: "CANAL LLANQUIHUE", channel: "50", adsl: "239.255.5.149", fca: "239.255.5.149", mpeg4: " '", criticidad: " '", bw: "3.5" },
    { nombre: "PATAGONIA RADIO TV", channel: "51", adsl: "239.255.3.115", fca: "239.255.3.115", mpeg4: "239.255.3.114", criticidad: "4", bw: "3.5" },
    { nombre: "BOC TV", channel: "52", adsl: "239.255.3.17", fca: "239.255.3.17", mpeg4: " '", criticidad: " '", bw: "3.5" },
    { nombre: "PRIMITIVOS", channel: "53", adsl: "239.255.3.2", fca: "239.255.3.2", mpeg4: "239.255.3.2", criticidad: "4", bw: "3.5" },
    { nombre: "CANAL LATINO", channel: "54", adsl: "239.255.3.82", fca: "239.255.3.82", mpeg4: "239.255.3.82", criticidad: "4", bw: "3.5" },
    { nombre: "UMAG TV AYSEN", channel: "58", adsl: "239.255.3.177", fca: "239.255.3.177", mpeg4: " '", criticidad: " '", bw: "3.5" },
    { nombre: "CANAL RTV CORP MUNICIPAL CASTRO", channel: "59", adsl: "239.255.5.136", fca: "239.255.5.136", mpeg4: " '", criticidad: " '", bw: "3.5" },
    { nombre: "FOX SPORTS 1", channel: "70", adsl: "239.255.2.44", fca: "239.255.5.44", mpeg4: "239.255.3.205", criticidad: "3", bw: "3.5" },
    { nombre: "Canal del Futbol Premium", channel: "71", adsl: "239.255.2.73", fca: "239.255.2.73", mpeg4: "239.255.3.107", criticidad: "3", bw: "3.5" },
    { nombre: "CDF HD", channel: "72", adsl: "239.255.2.100", fca: "239.255.2.100", mpeg4: "239.255.2.100", criticidad: "2", bw: "9" },
    { nombre: "FOX SPORTS 1 HD", channel: "73", adsl: "239.255.3.207", fca: "239.255.3.207", mpeg4: "239.255.3.207", criticidad: "3", bw: "9" },
    { nombre: "FOX SPORTS 3 HD", channel: "74", adsl: "239.255.3.15", fca: "239.255.3.15", mpeg4: "239.255.3.15", criticidad: "3", bw: "9" },
    { nombre: "CDO PREMIUM", channel: "76", adsl: "239.255.3.179", fca: "239.255.3.179", mpeg4: "239.255.3.179", criticidad: "4", bw: "3.5" },
    { nombre: "CDO HD", channel: "77", adsl: "239.255.3.184", fca: "239.255.3.184", mpeg4: "239.255.3.184", criticidad: "4", bw: "9" },
    { nombre: "FOX SPORTS 2", channel: "78", adsl: "239.255.3.219", fca: "239.255.5.100", mpeg4: "239.255.3.239", criticidad: "4", bw: "3.5" },
    { nombre: "FOX SPORTS 2 HD", channel: "79", adsl: "239.255.3.32", fca: "239.255.3.32", mpeg4: "239.255.3.32", criticidad: "3", bw: "9" },
    { nombre: "Canal del Futbol Basic", channel: "82", adsl: "239.255.2.74", fca: "239.255.2.74", mpeg4: "239.255.3.108", criticidad: "4", bw: "3.5" },
    { nombre: "FOX SPORTS", channel: "83", adsl: "239.255.2.43", fca: "239.255.5.43", mpeg4: "239.255.3.206", criticidad: "4", bw: "3.5" },
    { nombre: "ESPN", channel: "84", adsl: "239.255.2.7", fca: "239.255.2.7", mpeg4: "239.255.3.156", criticidad: "3", bw: "3.5" },
    { nombre: "ESPN 2", channel: "85", adsl: "239.255.2.12", fca: "239.255.5.12", mpeg4: "239.255.3.157", criticidad: "3", bw: "3.5" },
    { nombre: "ESPN 3", channel: "86", adsl: "239.255.2.90", fca: "239.255.5.90", mpeg4: "239.255.3.158", criticidad: "3", bw: "3.5" },
    { nombre: "TYC SPORTS", channel: "87", adsl: "239.255.2.244", fca: "239.255.2.244", mpeg4: "239.255.2.244", criticidad: "4", bw: "3.5" },
    { nombre: "GOL TV", channel: "88", adsl: "239.255.2.172", fca: "239.255.2.172", mpeg4: "239.255.2.57", criticidad: "4", bw: "3.5" },
    { nombre: "FOX SPORTS 3", channel: "89", adsl: "239.255.2.40", fca: "239.255.3.235", mpeg4: "239.255.3.209", criticidad: "4", bw: "3.5" },
    { nombre: "Discovery Turbo", channel: "90", adsl: "239.255.2.121", fca: "239.255.5.121", mpeg4: "239.255.5.121", criticidad: "3", bw: "3.5" },
    { nombre: "AMERICA SPORTS", channel: "91", adsl: "239.255.2.248", fca: "239.255.2.248", mpeg4: "239.255.2.248", criticidad: "4", bw: "3.5" },
    { nombre: "CDO BASICO", channel: "92", adsl: "239.255.3.180", fca: "239.255.3.180", mpeg4: "239.255.3.180", criticidad: "4", bw: "3.5" },
    { nombre: "GOLF CHANNEL", channel: "93", adsl: "239.255.2.238", fca: "239.255.2.238", mpeg4: "239.255.3.210", criticidad: "4", bw: "3.5" },
    { nombre: "Teletrak TV", channel: "95", adsl: "239.255.2.113", fca: "239.255.5.113", mpeg4: "239.255.5.113", criticidad: "4", bw: "3.5" },
    { nombre: "TRECE INTERNACIONAL", channel: "101", adsl: "239.255.2.249", fca: "239.255.2.249", mpeg4: "239.255.2.249", criticidad: "4", bw: "3.5" },
    { nombre: "TELEFE", channel: "102", adsl: "239.255.3.8", fca: "239.255.3.8", mpeg4: "239.255.3.8", criticidad: "4", bw: "3.5" },
    { nombre: "CANAL RURAL", channel: "103", adsl: "239.255.2.96", fca: "239.255.2.96", mpeg4: "239.255.2.96", criticidad: "4", bw: "3.5" },
    { nombre: "CARACOL TV", channel: "104", adsl: "239.255.2.168", fca: "239.255.2.168", mpeg4: "239.255.2.168", criticidad: "4", bw: "3.5" },
    { nombre: "CAMPO ABIERTO", channel: "105", adsl: "239.255.3.172", fca: "239.255.3.172", mpeg4: "239.255.3.172", criticidad: " '", bw: "3.5" },
    { nombre: "Antena 3 Internacional", channel: "107", adsl: "239.255.2.72", fca: "239.255.2.72", mpeg4: "239.255.3.193", criticidad: "4", bw: "3.5" },
    { nombre: "TVE", channel: "108", adsl: "239.255.3.9", fca: "239.255.3.9", mpeg4: "239.255.3.9", criticidad: "4", bw: "3.5" },
    { nombre: "TV 5", channel: "109", adsl: "239.255.2.75", fca: "239.255.2.75", mpeg4: "239.255.2.75", criticidad: "4", bw: "3.5" },
    { nombre: "DEUTSCHE WELLE AMERIKA", channel: "110", adsl: "239.255.2.35", fca: "239.255.5.35", mpeg4: "239.255.5.35", criticidad: "4", bw: "3.5" },
    { nombre: "RAI", channel: "111", adsl: "239.255.2.42", fca: "239.255.2.42", mpeg4: "239.255.2.42", criticidad: "4", bw: "3.5" },
    { nombre: "AZ MUNDO", channel: "113", adsl: "239.255.2.2", fca: "239.255.2.2", mpeg4: "239.255.2.128", criticidad: "4", bw: "3.5" },
    { nombre: "VOA TV", channel: "115", adsl: "239.255.3.66", fca: "239.255.3.66", mpeg4: "239.255.3.66", criticidad: "4", bw: "3.5" },
    { nombre: "DEUTSCHE WELLE", channel: "117", adsl: "239.255.3.6", fca: "239.255.5.6", mpeg4: "239.255.5.6", criticidad: "4", bw: "3.5" },
    { nombre: "NHK WORLD PREMIUM", channel: "125", adsl: "239.255.3.84", fca: "239.255.3.85", mpeg4: "239.255.3.85", criticidad: "4", bw: "3.5" },
    { nombre: "TV DIPUTADOS", channel: "128", adsl: "239.255.2.82", fca: "239.255.2.82", mpeg4: "239.255.3.44", criticidad: "4", bw: "3.5" },
    { nombre: "Canal del Senado", channel: "129", adsl: "239.255.2.83", fca: "239.255.5.83", mpeg4: "239.255.5.83", criticidad: "4", bw: "3.5" },
    { nombre: "Canal 24 Horas Chile", channel: "131", adsl: "239.255.2.246", fca: "239.255.2.246", mpeg4: "239.255.3.126", criticidad: "2", bw: "3.5" },
    { nombre: "CNN Chile", channel: "132", adsl: "239.255.2.114", fca: "239.255.2.114", mpeg4: "239.255.3.43", criticidad: "2", bw: "3.5" },
    { nombre: "CNN En Espanol", channel: "133", adsl: "239.255.2.17", fca: "239.255.5.17", mpeg4: "239.255.5.17", criticidad: "3", bw: "3.5" },
    { nombre: "CNNI", channel: "134", adsl: "239.255.2.15", fca: "239.255.5.15", mpeg4: "239.255.5.15", criticidad: "4", bw: "3.5" },
    { nombre: "Fox News Channel", channel: "135", adsl: "239.255.2.9", fca: "239.255.2.9", mpeg4: "239.255.3.240", criticidad: "4", bw: "3.5" },
    { nombre: "24 Horas TVE", channel: "136", adsl: "239.255.5.124", fca: "239.255.5.124", mpeg4: "239.255.3.68", criticidad: "4", bw: "3.5" },
    { nombre: "BBC World", channel: "137", adsl: "239.255.2.27", fca: "239.255.2.34", mpeg4: "239.255.3.244", criticidad: "4", bw: "3.5" },
    { nombre: "EURONEWS", channel: "138", adsl: "239.255.3.144", fca: "239.255.3.144", mpeg4: "239.255.3.144", criticidad: "4", bw: "3.5" },
    { nombre: "AL JAZEERA", channel: "139", adsl: "239.255.2.173", fca: "239.255.2.173", mpeg4: "239.255.2.173", criticidad: "4", bw: "3.5" },
    { nombre: "BLOOMBERG", channel: "140", adsl: "239.255.2.174", fca: "239.255.2.174", mpeg4: "239.255.3.51", criticidad: "4", bw: "3.5" },
    { nombre: "FRANCE 24", channel: "141", adsl: "239.255.2.171", fca: "239.255.2.171", mpeg4: "239.255.2.171", criticidad: "4", bw: "3.5" },
    { nombre: "RT", channel: "142", adsl: "239.255.2.130", fca: "239.255.2.130", mpeg4: "239.255.2.158", criticidad: "4", bw: "3.5" },
    { nombre: "EWTN", channel: "146", adsl: "239.255.2.26", fca: "239.255.5.26", mpeg4: "239.255.5.26", criticidad: "4", bw: "3.5" },
    { nombre: "MARIAVISIÓN", channel: "147", adsl: "239.255.3.167", fca: "239.255.3.167", mpeg4: "239.255.3.167", criticidad: "4", bw: "3.5" },
    { nombre: "ENLACE TBN", channel: "148", adsl: "239.255.2.88", fca: "239.255.2.88", mpeg4: "239.255.2.88", criticidad: "4", bw: "3.5" },
    { nombre: "NUEVO TIEMPO", channel: "149", adsl: "239.255.2.94", fca: "239.255.2.94", mpeg4: "239.255.2.94", criticidad: "4", bw: "3.5" },
    { nombre: "TBS VERYFUNNY", channel: "151", adsl: "239.255.2.70", fca: "239.255.5.70", mpeg4: "239.255.5.70", criticidad: "4", bw: "3.5" },
    { nombre: "Warner", channel: "152", adsl: "239.255.2.16", fca: "239.255.2.16", mpeg4: "239.255.3.250", criticidad: "2", bw: "3.5" },
    { nombre: "AXN", channel: "153", adsl: "239.255.2.47", fca: "239.255.2.47", mpeg4: "239.255.3.251", criticidad: "2", bw: "3.5" },
    { nombre: "SONY", channel: "154", adsl: "239.255.2.60", fca: "239.255.2.60", mpeg4: "239.255.3.252", criticidad: "3", bw: "3.5" },
    { nombre: "Canal Fox Chile", channel: "155", adsl: "239.255.2.37", fca: "239.255.2.37", mpeg4: "239.255.3.245", criticidad: "2", bw: "3.5" },
    { nombre: "A&E Latin Am Chile", channel: "156", adsl: "239.255.2.45", fca: "239.255.5.45", mpeg4: "239.255.3.159", criticidad: "3", bw: "3.5" },
    { nombre: "Universal Channel Chile", channel: "157", adsl: "239.255.2.41", fca: "239.255.2.41", mpeg4: "239.255.3.18", criticidad: "2", bw: "3.5" },
    { nombre: "FOX LIFE", channel: "158", adsl: "239.255.2.8", fca: "239.255.2.8", mpeg4: "239.255.3.253", criticidad: "3", bw: "3.5" },
    { nombre: "E! TV", channel: "159", adsl: "239.255.2.50", fca: "239.255.5.50", mpeg4: "239.255.2.86", criticidad: "3", bw: "3.5" },
    { nombre: "INV DSCVR", channel: "160", adsl: "239.255.2.22", fca: "239.255.2.22", mpeg4: "239.255.3.19", criticidad: "4", bw: "3.5" },
    { nombre: "TRU TV", channel: "161", adsl: "239.255.2.65", fca: "239.255.5.65", mpeg4: "239.255.5.65", criticidad: "4", bw: "3.5" },
    { nombre: "AZ CORAZON", channel: "162", adsl: "239.255.2.87", fca: "239.255.2.87", mpeg4: "239.255.2.129", criticidad: "4", bw: "3.5" },
    { nombre: "GLITZ", channel: "163", adsl: "239.255.2.64", fca: "239.255.5.64", mpeg4: "239.255.5.64", criticidad: "4", bw: "3.5" },
    { nombre: "FX", channel: "165", adsl: "239.255.2.38", fca: "239.255.2.38", mpeg4: "239.255.3.160", criticidad: "3", bw: "3.5" },
    { nombre: "SYFY", channel: "166", adsl: "239.255.2.170", fca: "239.255.2.170", mpeg4: "239.255.2.170", criticidad: "4", bw: "3.5" },
    { nombre: "TNT SERIES", channel: "167", adsl: "239.255.2.69", fca: "239.255.2.69", mpeg4: "239.255.3.161", criticidad: "4", bw: "3.5" },
    { nombre: "COMEDY CENTRAL", channel: "168", adsl: "239.255.3.133", fca: "239.255.3.133", mpeg4: "239.255.3.109", criticidad: "4", bw: "3.5" },
    { nombre: "LIFETIME", channel: "169", adsl: "239.255.2.46", fca: "239.255.2.46", mpeg4: "239.255.3.187", criticidad: "4", bw: "3.5" },
    { nombre: "MTV Latino Central", channel: "181", adsl: "239.255.2.61", fca: "239.255.5.61", mpeg4: "239.255.5.61", criticidad: "3", bw: "3.5" },
    { nombre: "VH1", channel: "182", adsl: "239.255.2.63", fca: "239.255.5.63", mpeg4: "239.255.5.63", criticidad: "4", bw: "3.5" },
    { nombre: "BONITA TV", channel: "184", adsl: "239.255.3.243", fca: "239.255.3.243", mpeg4: "239.255.3.232", criticidad: "4", bw: "3.5" },
    { nombre: "MTV Hits", channel: "185", adsl: "239.255.2.119", fca: "239.255.5.119", mpeg4: "239.255.5.119", criticidad: "4", bw: "3.5" },
    { nombre: "MTV DANCE", channel: "186", adsl: "239.255.2.118", fca: "239.255.5.118", mpeg4: "239.255.5.118", criticidad: "4", bw: "3.5" },
    { nombre: "VH1 MEGAHITS", channel: "187", adsl: "239.255.2.117", fca: "239.255.5.117", mpeg4: "239.255.5.117", criticidad: "4", bw: "3.5" },
    { nombre: "MUCHMUSIC", channel: "188", adsl: "239.255.2.242", fca: "239.255.5.242", mpeg4: "239.255.5.242", criticidad: "4", bw: "3.5" },
    { nombre: "HTV Hispano Television", channel: "189", adsl: "239.255.2.67", fca: "239.255.5.67", mpeg4: "239.255.5.67", criticidad: "4", bw: "3.5" },
    { nombre: "DISCOVERY", channel: "202", adsl: "239.255.2.18", fca: "239.255.2.18", mpeg4: "239.255.3.20", criticidad: "3", bw: "3.5" },
    { nombre: "National Geographic Chile", channel: "203", adsl: "239.255.2.39", fca: "239.255.2.39", mpeg4: "239.255.3.24", criticidad: "3", bw: "3.5" },
    { nombre: "History Channel Colombia", channel: "204", adsl: "239.255.2.57", fca: "239.255.5.57", mpeg4: "239.255.3.162", criticidad: "3", bw: "3.5" },
    { nombre: "DISCOVERY HOME AND HEALTH", channel: "205", adsl: "239.255.2.19", fca: "239.255.2.19", mpeg4: "239.255.3.25", criticidad: "3", bw: "3.5" },
    { nombre: "EL GOURMET", channel: "208", adsl: "239.255.2.166", fca: "239.255.2.166", mpeg4: "239.255.3.48", criticidad: "4", bw: "3.5" },
    { nombre: "MAS CHIC", channel: "209", adsl: "239.255.2.1", fca: "239.255.2.50", mpeg4: "239.255.3.230", criticidad: "4", bw: "3.5" },
    { nombre: "ANIMAL PLANET", channel: "210", adsl: "239.255.2.23", fca: "239.255.2.23", mpeg4: "239.255.3.231", criticidad: "3", bw: "3.5" },
    { nombre: "Travel & Living", channel: "211", adsl: "239.255.2.21", fca: "239.255.2.21", mpeg4: "239.255.3.238", criticidad: "3", bw: "3.5" },
    { nombre: "Discovery Civilization", channel: "212", adsl: "239.255.2.120", fca: "239.255.5.120", mpeg4: "239.255.5.120", criticidad: "4", bw: "3.5" },
    { nombre: "Discovery Science", channel: "213", adsl: "239.255.2.112", fca: "239.255.5.112", mpeg4: "239.255.5.112", criticidad: "3", bw: "3.5" },
    { nombre: "H2", channel: "215", adsl: "239.255.2.71", fca: "239.255.2.71", mpeg4: "239.255.3.237", criticidad: "4", bw: "3.5" },
    { nombre: "TNT Chile feed", channel: "251", adsl: "239.255.2.13", fca: "239.255.5.13", mpeg4: "239.255.5.13", criticidad: "2", bw: "3.5" },
    { nombre: "CINECANAL", channel: "252", adsl: "239.255.2.30", fca: "239.255.2.30", mpeg4: "239.255.3.163", criticidad: "4", bw: "3.5" },
    { nombre: "FILM&ARTS", channel: "253", adsl: "239.255.3.143", fca: "239.255.3.143", mpeg4: "239.255.3.49", criticidad: "4", bw: "3.5" },
    { nombre: "SPACE", channel: "254", adsl: "239.255.2.66", fca: "239.255.3.37", mpeg4: "239.255.3.164", criticidad: "4", bw: "3.5" },
    { nombre: "Hallmark", channel: "255", adsl: "239.255.2.36", fca: "239.255.3.38", mpeg4: "239.255.5.36", criticidad: "4", bw: "3.5" },
    { nombre: "AMC", channel: "256", adsl: "239.255.2.3", fca: "239.255.2.3", mpeg4: "239.255.3.236", criticidad: "4", bw: "3.5" },
    { nombre: "EUROCHANNEL", channel: "257", adsl: "239.255.2.245", fca: "239.255.2.245", mpeg4: "239.255.2.245", criticidad: "4", bw: "3.5" },
    { nombre: "EUROPA EUROPA", channel: "258", adsl: "239.255.5.125", fca: "239.255.5.125", mpeg4: "239.255.3.64", criticidad: "4", bw: "3.5" },
    { nombre: "I-SAT", channel: "259", adsl: "239.255.2.68", fca: "239.255.5.68", mpeg4: "239.255.5.68", criticidad: "3", bw: "3.5" },
    { nombre: "FX MOVIES", channel: "260", adsl: "239.255.2.34", fca: "239.255.3.39", mpeg4: "239.255.3.39", criticidad: "3", bw: "3.5" },
    { nombre: "CINEMAX CHILE", channel: "261", adsl: "239.255.2.49", fca: "239.255.2.49", mpeg4: "239.255.3.217", criticidad: "3", bw: "3.5" },
    { nombre: "TCM", channel: "262", adsl: "239.255.2.14", fca: "239.255.5.14", mpeg4: "239.255.5.14", criticidad: "4", bw: "3.5" },
    { nombre: "CityStar", channel: "269", adsl: "239.255.2.28", fca: "239.255.2.28", mpeg4: "239.255.3.26", criticidad: "4", bw: "3.5" },
    { nombre: "City Mix East", channel: "270", adsl: "239.255.2.31", fca: "239.255.2.31", mpeg4: "239.255.3.228", criticidad: "4", bw: "3.5" },
    { nombre: "FOX FAMILY ESTE", channel: "271", adsl: "239.255.2.29", fca: "239.255.2.29", mpeg4: "239.255.3.222", criticidad: "3", bw: "3.5" },
    { nombre: "City Family West", channel: "272", adsl: "239.255.2.92", fca: "239.255.2.92", mpeg4: "239.255.3.223", criticidad: "4", bw: "3.5" },
    { nombre: "FOX SERIES ESTE", channel: "273", adsl: "239.255.2.32", fca: "239.255.2.32", mpeg4: "239.255.3.224", criticidad: "3", bw: "3.5" },
    { nombre: "FOX SERIES OESTE", channel: "274", adsl: "239.255.2.33", fca: "239.255.2.33", mpeg4: "239.255.3.225", criticidad: "4", bw: "3.5" },
    { nombre: "CityVibe East", channel: "275", adsl: "239.255.2.93", fca: "239.255.2.93", mpeg4: "239.255.3.226", criticidad: "4", bw: "3.5" },
    { nombre: "CityVibe West", channel: "276", adsl: "239.255.2.91", fca: "239.255.2.68", mpeg4: "239.255.3.227", criticidad: "4", bw: "3.5" },
    { nombre: "FOX CINEMA", channel: "277", adsl: "239.255.3.249", fca: "239.255.3.249", mpeg4: "239.255.3.249", criticidad: "3", bw: "3.5" },
    { nombre: "FOX COMEDY HD", channel: "278", adsl: "239.255.3.130", fca: "239.255.3.130", mpeg4: "239.255.3.130", criticidad: "3", bw: "3.5" },
    { nombre: "HBO Family East", channel: "279", adsl: "239.255.2.52", fca: "239.255.2.52", mpeg4: "239.255.3.220", criticidad: "3", bw: "3.5" },
    { nombre: "HBO SIGNATURE", channel: "280", adsl: "239.255.2.53", fca: "239.255.2.53", mpeg4: "239.255.2.161", criticidad: "3", bw: "3.5" },
    { nombre: "HBO Ole VZ East", channel: "281", adsl: "239.255.2.51", fca: "239.255.2.51", mpeg4: "239.255.3.213", criticidad: "3", bw: "3.5" },
    { nombre: "HBO 2", channel: "282", adsl: "239.255.2.54", fca: "239.255.2.66", mpeg4: "239.255.2.162", criticidad: "3", bw: "3.5" },
    { nombre: "HBO Ole Plus Arg (East)", channel: "283", adsl: "239.255.2.55", fca: "239.255.2.55", mpeg4: " '", criticidad: "3", bw: "3.5" },
    { nombre: "HBO Ole Plus Mexico (West)", channel: "284", adsl: "239.255.2.56", fca: "239.255.2.56", mpeg4: "239.255.2.164", criticidad: "3", bw: "3.5" },
    { nombre: "Cinemax LatinAm VZ East", channel: "285", adsl: "239.255.2.48", fca: "239.255.2.48", mpeg4: "239.255.3.216", criticidad: "3", bw: "3.5" },
    { nombre: "MAX PRIME O", channel: "286", adsl: "239.255.2.58", fca: "239.255.2.58", mpeg4: "239.255.3.70", criticidad: "3", bw: "3.5" },
    { nombre: "MAX PRIME E", channel: "287", adsl: "239.255.2.59", fca: "239.255.2.59", mpeg4: " '", criticidad: " '", bw: "3.5" },
    { nombre: "FOX SERIES HD", channel: "801", adsl: "239.255.2.102", fca: "239.255.2.102", mpeg4: "239.255.2.102", criticidad: "3", bw: "9" },
    { nombre: "HBO HD ESTE", channel: "802", adsl: "239.255.2.101", fca: "239.255.2.101", mpeg4: "239.255.2.101", criticidad: "3", bw: "9" },
    { nombre: "MAX UP HD", channel: "803", adsl: "239.255.2.251", fca: "239.255.2.251", mpeg4: "239.255.2.251", criticidad: "3", bw: "9" },
    { nombre: "FOX MOVIES HD", channel: "804", adsl: "239.255.3.103", fca: "239.255.3.103", mpeg4: "239.255.3.103", criticidad: "3", bw: "9" },
    { nombre: "FOX ACTION HD", channel: "805", adsl: "239.255.3.104", fca: "239.255.2.57", mpeg4: "239.255.3.104", criticidad: "3", bw: "9" },
    { nombre: "TV+ HD", channel: "808", adsl: "239.255.2.232", fca: "239.255.2.232", mpeg4: "239.255.2.232", criticidad: "3", bw: "9" },
    { nombre: "RED HD", channel: "810", adsl: "239.255.2.233", fca: "239.255.2.233", mpeg4: "239.255.2.233", criticidad: "3", bw: "9" },
    { nombre: "CANAL 13 HD", channel: "813", adsl: "239.255.2.230", fca: "239.255.2.230", mpeg4: "239.255.2.230", criticidad: "1", bw: "9" },
    { nombre: "TVN 24 Horas HD", channel: "816", adsl: "239.255.3.99", fca: "239.255.3.99", mpeg4: "239.255.3.99", criticidad: "2", bw: "9" },
    { nombre: "HBO FAMILY", channel: "817", adsl: "239.255.3.10", fca: "239.255.3.10", mpeg4: "239.255.3.10", criticidad: "3", bw: "9" },
    { nombre: "DISCOVERY KIDS HD", channel: "818", adsl: "239.255.3.254", fca: "239.255.3.254", mpeg4: "239.255.3.52", criticidad: "3", bw: "9" },
    { nombre: "NICK 2", channel: "819", adsl: "239.255.2.144", fca: "239.255.2.144", mpeg4: "239.255.3.53", criticidad: "3", bw: "9" },
    { nombre: "FOX HD", channel: "820", adsl: "239.255.2.250", fca: "239.255.2.250", mpeg4: "239.255.2.250", criticidad: "3", bw: "9" },
    { nombre: "DISCOVERY HD THEATER", channel: "821", adsl: "239.255.2.252", fca: "239.255.2.13", mpeg4: "239.255.2.252", criticidad: "3", bw: "9" },
    { nombre: "NAT GEO WILD HD", channel: "822", adsl: "239.255.2.253", fca: "239.255.2.253", mpeg4: "239.255.2.253", criticidad: "4", bw: "9" },
    { nombre: "DISCOVERY WORLD HD", channel: "823", adsl: "239.255.2.109", fca: "239.255.2.62", mpeg4: "239.255.2.109", criticidad: "3", bw: "9" },
    { nombre: "HISTORY HD", channel: "824", adsl: "239.255.2.105", fca: "239.255.2.105", mpeg4: "239.255.2.105", criticidad: "3", bw: "9" },
    { nombre: "NHK HD", channel: "825", adsl: "239.255.3.242", fca: "239.255.3.242", mpeg4: "239.255.3.242", criticidad: "4", bw: "9" },
    { nombre: "DISCOVERY ID HD", channel: "826", adsl: "239.255.3.112", fca: "239.255.3.112", mpeg4: "239.255.3.112", criticidad: "3", bw: "9" },
    { nombre: "DISCOVERY HOME AND HEALTH HD", channel: "827", adsl: "239.255.3.111", fca: "239.255.3.111", mpeg4: "239.255.3.111", criticidad: "3", bw: "9" },
    { nombre: "UNIVERSIDAD AUTÓNOMA HD", channel: "828", adsl: "239.255.3.174", fca: "239.255.3.174", mpeg4: "239.255.3.174", criticidad: "3", bw: "9" },
    { nombre: "13 CABLE HD", channel: "829", adsl: "239.255.2.152", fca: "239.255.2.152", mpeg4: "239.255.2.152", criticidad: "3", bw: "9" },
    { nombre: "VIDA SOCIAL TV HD", channel: "830", adsl: "239.255.2.153", fca: "239.255.2.153", mpeg4: "239.255.2.153", criticidad: "4", bw: "9" },
    { nombre: "PRIMITIVOSHD_831", channel: "831", adsl: "239.255.2.89", fca: "239.255.2.89", mpeg4: "239.255.2.89", criticidad: "4", bw: "9" },
    { nombre: "UFROVISION", channel: "832", adsl: "239.255.2.154", fca: "239.255.2.154", mpeg4: "239.255.2.154", criticidad: "4", bw: "9" },
    { nombre: "NAT GEO HD", channel: "833", adsl: "239.255.3.91", fca: "239.255.3.91", mpeg4: "239.255.3.91", criticidad: "3", bw: "9" },
    { nombre: "DISCOVERY HD", channel: "834", adsl: "239.255.3.119", fca: "239.255.3.119", mpeg4: "239.255.3.119", criticidad: "3", bw: "9" },
    { nombre: "ANIMAL PLANET HD", channel: "835", adsl: "239.255.3.102", fca: "239.255.3.102", mpeg4: "239.255.3.102", criticidad: "3", bw: "9" },
    { nombre: "NAT GEO KIDS HD", channel: "836", adsl: "239.255.3.92", fca: "239.255.3.92", mpeg4: "239.255.3.92", criticidad: "3", bw: "9" },
    { nombre: "CANAL TENDENCIAS PRIME HD", channel: "841", adsl: "239.255.5.140", fca: "239.255.5.140", mpeg4: "239.255.5.141", criticidad: "4", bw: "9" },
    { nombre: "CDF HD", channel: "845", adsl: "239.255.3.11", fca: "239.255.3.11", mpeg4: "239.255.3.11", criticidad: "3", bw: "9" },
    { nombre: "FOX SPORTS 1 HD", channel: "846", adsl: "239.255.3.208", fca: "239.255.3.208", mpeg4: "239.255.3.208", criticidad: "3", bw: "9" },
    { nombre: "FOX SPORTS 3 HD", channel: "847", adsl: "239.255.3.188", fca: "239.255.3.188", mpeg4: "239.255.3.188", criticidad: "3", bw: "9" },
    { nombre: "CDO HD", channel: "848", adsl: "239.255.3.12", fca: "239.255.3.12", mpeg4: "239.255.3.12", criticidad: "3", bw: "9" },
    { nombre: "GOL TV HD", channel: "849", adsl: "239.255.2.156", fca: "239.255.2.156", mpeg4: "239.255.2,156", criticidad: "3", bw: "9" },
    { nombre: "TELETRAK HD", channel: "851", adsl: "239.255.2.157", fca: "239.255.2.157", mpeg4: "239.255.2.157", criticidad: "4", bw: "9" },
    { nombre: "ESPN + HD", channel: "853", adsl: "239.255.2.234", fca: "239.255.2.234", mpeg4: "239.255.3.33", criticidad: "3", bw: "9" },
    { nombre: "ESPN 3 HD", channel: "854", adsl: "239.255.3.13", fca: "239.255.3.13", mpeg4: "239.255.3.185", criticidad: "3", bw: "9" },
    { nombre: "FOX SPORTS 2 HD", channel: "855", adsl: "239.255.3.189", fca: "239.255.3.189", mpeg4: "239.255.3.189", criticidad: "3", bw: "9" },
    { nombre: "FOX SPORTS HD", channel: "856", adsl: "239.255.5.151", fca: "239.255.5.151", mpeg4: "239.255.5.151", criticidad: "3", bw: "9" },
    { nombre: "WARNER HD", channel: "862", adsl: "239.255.2.107", fca: "239.255.2.107", mpeg4: "239.255.2.107", criticidad: "3", bw: "9" },
    { nombre: "AXN HD", channel: "863", adsl: "239.255.2.227", fca: "239.255.2.227", mpeg4: "239.255.2.227", criticidad: "3", bw: "9" },
    { nombre: "SONY HD", channel: "864", adsl: "239.255.2.236", fca: "239.255.2.236", mpeg4: "239.255.2.236", criticidad: "3", bw: "9" },
    { nombre: "FX HD", channel: "865", adsl: "239.255.3.22", fca: "239.255.3.22", mpeg4: "239.255.3.22", criticidad: "3", bw: "9" },
    { nombre: "A&E HD", channel: "866", adsl: "239.255.2.237", fca: "239.255.2.237", mpeg4: "239.255.2.237", criticidad: "3", bw: "9" },
    { nombre: "RT HD", channel: "868", adsl: "239.255.2.158", fca: "239.255.2.158", mpeg4: "239.255.3.129", criticidad: "4", bw: "9" },
    { nombre: "AZ MUNDO HD", channel: "869", adsl: "239.255.2.159", fca: "239.255.2.159", mpeg4: "239.255.2.159", criticidad: "4", bw: "9" },
    { nombre: "REC HD", channel: "870", adsl: "239.255.2.231", fca: "239.255.2.231", mpeg4: "239.255.2.231", criticidad: "3", bw: "9" },
    { nombre: "AZ CORAZON HD", channel: "871", adsl: "239.255.2.160", fca: "239.255.2.160", mpeg4: "239.255.2.160", criticidad: "4", bw: "9" },
    { nombre: "FRANCE 24 HD", channel: "872", adsl: "239.255.3.46", fca: "239.255.3.46", mpeg4: "239.255.3.46", criticidad: "3", bw: "9" },
    { nombre: "TRU TV HD", channel: "876", adsl: "239.255.2.243", fca: "239.255.2.243", mpeg4: "239.255.2.243", criticidad: "4", bw: "9" },
    { nombre: "MTV HD", channel: "881", adsl: "239.255.2.235", fca: "239.255.2.235", mpeg4: "239.255.2.235", criticidad: "4", bw: "9" },
    { nombre: "BONITA TV HD", channel: "883", adsl: "239.255.2.155", fca: "239.255.2.155", mpeg4: "239.255.2.155", criticidad: "4", bw: "9" },
    { nombre: "FOX FAMILY HD", channel: "884", adsl: "239.255.3.97", fca: "239.255.3.97", mpeg4: "239.255.3.97", criticidad: "4", bw: "9" },
    { nombre: "FOX COMEDY HD", channel: "885", adsl: "239.255.3.98", fca: "239.255.3.98", mpeg4: "239.255.3.98", criticidad: "4", bw: "9" },
    { nombre: "MAX HD", channel: "886", adsl: "239.255.3.127", fca: "239.255.3.127", mpeg4: "239.255.3.127", criticidad: "4", bw: "9" },
    { nombre: "FOX CINEMA HD", channel: "887", adsl: "239.255.3.95", fca: "239.255.3.95", mpeg4: "239.255.3.95", criticidad: "4", bw: "9" },
    { nombre: "FOX CLASSICS HD", channel: "888", adsl: "239.255.3.96", fca: "239.255.3.96", mpeg4: "239.255.3.96", criticidad: "4", bw: "9" },
    { nombre: "FX MOVIES HD", channel: "889", adsl: "239.255.3.93", fca: "239.255.3.93", mpeg4: "239.255.3.124", criticidad: "4", bw: "9" },
    { nombre: "TNT HD CHILE", channel: "890", adsl: "239.255.2.228", fca: "239.255.2.228", mpeg4: "239.255.2.228", criticidad: "4", bw: "9" },
    { nombre: "SPACE HD", channel: "891", adsl: "239.255.2.254", fca: "239.255.2.254", mpeg4: "239.255.3.94", criticidad: "4", bw: "9" },
    { nombre: "CINECANAL HD", channel: "893", adsl: "239.255.2.110", fca: "239.255.2.110", mpeg4: "239.255.3.229", criticidad: "4", bw: "9" },
    { nombre: "HBO SIGNATURE", channel: "894", adsl: "239.255.2.161", fca: "239.255.2.161", mpeg4: "239.255.3.212", criticidad: "4", bw: "9" },
    { nombre: "HBO 2", channel: "895", adsl: "239.255.2.162", fca: "239.255.2.162", mpeg4: "239.255.3.221", criticidad: "4", bw: "9" },
    { nombre: "HBO PLUS", channel: "896", adsl: "239.255.2.163", fca: "239.255.2.163", mpeg4: " '", criticidad: " '", bw: "9" },
    { nombre: "HBO PLUS Oeste", channel: "897", adsl: "239.255.2.164", fca: "239.255.2.164", mpeg4: "239.255.3.203", criticidad: "4", bw: "9" },
    { nombre: "MAX PRIME O", channel: "898", adsl: "239.255.3.55", fca: "239.255.3.55", mpeg4: "239.255.3.55", criticidad: "4", bw: "9" },
    { nombre: "MAX PRIME E", channel: "899", adsl: "239.255.3.56", fca: "239.255.3.56", mpeg4: " '", criticidad: " '", bw: "9" },
    { nombre: "TELSUR", channel: "901", adsl: "239.255.3.146", fca: "239.255.3.146", mpeg4: "239.255.3.146", criticidad: "4", bw: "3.5" },
    { nombre: "STINGRAY EL SALON CHILL", channel: "902", adsl: "239.255.2.213", fca: "239.255.2.213", mpeg4: "239.255.2.213", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY CLÁSICOS INDIE", channel: "903", adsl: "239.255.2.218", fca: "239.255.2.218", mpeg4: "239.255.2.218", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY NEW AGE", channel: "904", adsl: "239.255.2.199", fca: "239.255.2.199", mpeg4: "239.255.2.192", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY LATINO TROPICAL", channel: "907", adsl: "239.255.2.185", fca: "239.255.2.185", mpeg4: "239.255.2.185", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY REGGAETÓN", channel: "908", adsl: "239.255.2.217", fca: "239.255.2.217", mpeg4: "239.255.2.217", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY SAMBA Y PAGODE", channel: "910", adsl: "239.255.2.197", fca: "239.255.2.197", mpeg4: "239.255.2.197", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY LATINO TROPICAL", channel: "911", adsl: "239.255.2.211", fca: "239.255.2.211", mpeg4: "239.255.2.211", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY SALSA Y MERENGUE", channel: "912", adsl: "239.255.2.219", fca: "239.255.2.219", mpeg4: "239.255.2.219", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY SESIONES DANCEHALL", channel: "913", adsl: "239.255.2.191", fca: "239.255.2.43", mpeg4: "239.255.2.191", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY CLÁSICOS DEL DANCE", channel: "915", adsl: "239.255.2.220", fca: "239.255.2.220", mpeg4: "239.255.2.220", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY SILK", channel: "917", adsl: "239.255.2.184", fca: "239.255.2.184", mpeg4: "239.255.2.184", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY ROMANCE LATINO", channel: "919", adsl: "239.255.2.224", fca: "239.255.2.224", mpeg4: "239.255.2.34", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY POP ADULTO", channel: "920", adsl: "239.255.2.216", fca: "239.255.2.216", mpeg4: "239.255.2.216", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY ROCK DE BRASIL", channel: "921", adsl: "239.255.2.198", fca: "239.255.2.198", mpeg4: "239.255.2.198", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY EURO HITS", channel: "922", adsl: "239.255.2.222", fca: "239.255.2.222", mpeg4: "239.255.2.222", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY AÑOS 70", channel: "923", adsl: "239.255.2.182", fca: "239.255.2.182", mpeg4: "239.255.2.182", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY AÑOS 90", channel: "924", adsl: "239.255.2.180", fca: "239.255.2.180", mpeg4: "239.255.2.180", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY SOLO PARA PEQUES", channel: "926", adsl: "239.255.2.186", fca: "239.255.2.186", mpeg4: "239.255.2.186", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY CLUB DE BAILE", channel: "927", adsl: "239.255.2.202", fca: "239.255.2.202", mpeg4: "239.255.2.202", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY FIESTA CONTINUA", channel: "930", adsl: "239.255.2.195", fca: "239.255.2.195", mpeg4: "239.255.2.195", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY CLÁSICOS DEL SOUL Y EL R&B", channel: "932", adsl: "239.255.2.192", fca: "239.255.2.192", mpeg4: "239.255.2.192", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY VIEJITAS PERO BUENÍSIMAS", channel: "933", adsl: "239.255.2.210", fca: "239.255.2.210", mpeg4: "239.255.2.210", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY AÑOS 80", channel: "935", adsl: "239.255.2.183", fca: "239.255.2.183", mpeg4: "239.255.2.183", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY POP LATINO ACTUAL", channel: "936", adsl: "239.255.2.221", fca: "239.255.2.221", mpeg4: "239.255.2.221", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY EXITOS RECIENTES", channel: "937", adsl: "239.255.2.190", fca: "239.255.2.190", mpeg4: "239.255.2.190", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY EXITOS DE ITALIA", channel: "938", adsl: "239.255.2.209", fca: "239.255.2.209", mpeg4: "239.255.2.209", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY ESTANDARES", channel: "939", adsl: "239.255.2.205", fca: "239.255.2.205", mpeg4: "239.255.2.205", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY POPCORN", channel: "940", adsl: "239.255.2.193", fca: "239.255.2.193", mpeg4: "239.255.2.193", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY GRANDES BANDAS", channel: "941", adsl: "239.255.2.204", fca: "239.255.2.204", mpeg4: "239.255.2.204", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY BLUES", channel: "942", adsl: "239.255.2.214", fca: "239.255.2.214", mpeg4: "239.255.2.214", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY MAESTROS DEL JAZZ", channel: "943", adsl: "239.255.2.178", fca: "239.255.2.178", mpeg4: "239.255.2.178", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY MARIACHI PARA SIEMPRE", channel: "945", adsl: "239.255.2.203", fca: "239.255.2.203", mpeg4: "239.255.2.203", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY VIVA MEXICO", channel: "946", adsl: "239.255.2.201", fca: "239.255.2.201", mpeg4: "239.255.2.201", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY EXITOS DE LAS AMERICAS", channel: "947", adsl: "239.255.2.212", fca: "239.255.2.212", mpeg4: "239.255.2.212", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY EXITOS DE BRASIL", channel: "948", adsl: "239.255.2.196", fca: "239.255.2.196", mpeg4: "239.255.2.196", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY EXITOS DE BRASIL", channel: "949", adsl: "239.255.2.187", fca: "239.255.2.187", mpeg4: "239.255.2.187", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY JAMMIN' REGGAE", channel: "950", adsl: "239.255.2.189", fca: "239.255.2.189", mpeg4: "239.255.2.189", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY EL SALON CHILL", channel: "951", adsl: "239.255.2.177", fca: "239.255.2.177", mpeg4: "239.255.2.177", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY MUSICA DEL MUNDO", channel: "952", adsl: "239.255.2.207", fca: "239.255.2.207", mpeg4: "239.255.2.207", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY TANGO", channel: "953", adsl: "239.255.2.206", fca: "239.255.2.206", mpeg4: "239.255.2.206", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY ROCK ALTERNATIVO", channel: "954", adsl: "239.255.2.179", fca: "239.255.2.179", mpeg4: "239.255.2.179", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY HIMNOS DEL ROCK", channel: "955", adsl: "239.255.2.188", fca: "239.255.2.188", mpeg4: "239.255.2.188", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY ROCK EN ESPAÑOL", channel: "956", adsl: "239.255.2.200", fca: "239.255.2.200", mpeg4: "239.255.2.200", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY HARD ROCK", channel: "957", adsl: "239.255.2.181", fca: "239.255.2.181", mpeg4: "239.255.2.181", criticidad: "4", bw: "0.4" },
    { nombre: "MUSICA CLASICA", channel: "959", adsl: "239.255.2.215", fca: "239.255.2.215", mpeg4: "239.255.2.215", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY COCKTAIL LOUNGE", channel: "960", adsl: "239.255.2.175", fca: "239.255.2.175", mpeg4: "239.255.2.175", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY MÚSICA LIGERA", channel: "961", adsl: "239.255.2.223", fca: "239.255.2.223", mpeg4: "239.255.2.223", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY OPERA PLUS", channel: "962", adsl: "239.255.2.176", fca: "239.255.2.176", mpeg4: "239.255.2.176", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY MAESTROS DEL CLÁSICO", channel: "963", adsl: "239.255.2.208", fca: "239.255.2.208", mpeg4: "239.255.2.208", criticidad: "4", bw: "0.4" },
    { nombre: "STINGRAY JAZZ LATINO", channel: "964", adsl: "239.255.2.194", fca: "239.255.2.194", mpeg4: "239.255.2.194", criticidad: "4", bw: "0.4" },
    { nombre: "RADIO MARIA", channel: "972", adsl: "239.255.3.88", fca: "239.255.3.88", mpeg4: "239.255.3.88", criticidad: "4", bw: "0.4" },
    { nombre: "RADIO CONCIERTO", channel: "973", adsl: "239.255.2.148", fca: "239.255.2.148", mpeg4: "239.255.2.148", criticidad: "4", bw: "0.4" },
    { nombre: "RADIO AGRICULTURA", channel: "974", adsl: "239.255.3.134", fca: "239.255.3.134", mpeg4: "239.255.3.134", criticidad: "4", bw: "0.4" },
    { nombre: "RADIO ROCKANDPOP", channel: "975", adsl: "239.255.3.136", fca: "239.255.3.136", mpeg4: "239.255.3.136", criticidad: "4", bw: "0.4" },
    { nombre: "RADIO PLAY FM", channel: "976", adsl: "239.255.3.135", fca: "239.255.3.135", mpeg4: "239.255.3.135", criticidad: "4", bw: "0.4" },
    { nombre: "RADIO FM DOS", channel: "977", adsl: "239.255.3.132", fca: "239.255.3.132", mpeg4: "239.255.3.132", criticidad: "4", bw: "0.4" },
    { nombre: "RADIO ADN", channel: "978", adsl: "239.255.3.138", fca: "239.255.3.138", mpeg4: "239.255.3.138", criticidad: "4", bw: "0.4" },
    { nombre: "RADIO TIEMPO", channel: "979", adsl: "239.255.3.61", fca: "239.255.3.61", mpeg4: "239.255.3.61", criticidad: "4", bw: "0.4" },
    { nombre: "RADIO BEETHOVEN", channel: "980", adsl: "239.255.3.60", fca: "239.255.3.60", mpeg4: "239.255.3.60", criticidad: "4", bw: "0.4" },
    { nombre: "RADIO FUTURO", channel: "981", adsl: "239.255.3.59", fca: "239.255.3.59", mpeg4: "239.255.3.59", criticidad: "4", bw: "0.4" },
    { nombre: "Radio Bio Bio Nacional", channel: "982", adsl: "239.255.2.139", fca: "239.255.2.139", mpeg4: "239.255.2.139", criticidad: "4", bw: "0.4" },
    { nombre: "Radio Bio Bio Temuco", channel: "983", adsl: "239.255.2.137", fca: "239.255.2.137", mpeg4: "239.255.2.137", criticidad: "4", bw: "0.4" },
    { nombre: "Radio Bio Bio Concepción", channel: "984", adsl: "239.255.2.136", fca: "239.255.2.136", mpeg4: "239.255.2.136", criticidad: "4", bw: "0.4" },
    { nombre: "BLOOMBERG RADIO", channel: "990", adsl: "239.255.3.139", fca: "239.255.3.139", mpeg4: "239.255.3.139", criticidad: "4", bw: "0.4" },
    { nombre: "BBC RADIO", channel: "991", adsl: "239.255.3.150", fca: "239.255.3.150", mpeg4: "239.255.3.150", criticidad: "4", bw: "0.4" },
    { nombre: "DW RADIO", channel: "992", adsl: "239.255.3.151", fca: "239.255.3.151", mpeg4: "239.255.3.151", criticidad: "4", bw: "0.4" },
    { nombre: "RADIO MUSIC", channel: "993", adsl: "239.255.3.152", fca: "239.255.3.152", mpeg4: "239.255.3.152", criticidad: "4", bw: "0.4" },
    { nombre: "RAI RADIO", channel: "994", adsl: "239.255.3.153", fca: "239.255.3.153", mpeg4: "239.255.3.153", criticidad: "4", bw: "0.4" },
    { nombre: "RADIO EUSKADI", channel: "995", adsl: "239.255.3.154", fca: "239.255.3.154", mpeg4: "239.255.3.154", criticidad: "4", bw: "0.4" },

]
/* 
const [nombre, channel, adsl, fca, mpeg4, criticidad] = canales;

console.log(`Nombre: ${nombre}`) */

/* const chann = canales.forEach(element => {
    const result=(`${element.nombre} número:${element.channel} - adsl:${element.adsl} - fca:${element.fca} - mpeg4:${element.mpeg4}`);
    console.log(result.toUpperCase());
}); */

/* const findCadena = () => {
    var buscar = prompt('Buscar canal por nombre: ')
    let result = 0;
    const texto = buscar.toLowerCase();
    for (let canal of canales) {
        let nombre = canal.nombre.toLowerCase();
        if (nombre.indexOf(texto) !== -1) {
            result += `${canal.nombre} -> ${canal.channel}. ` ;
            console.log(result);
        }
    }
    if(result === ''){
        console.log('No encontrado')
    }
}
findCadena(); */

//Buscar señales por numero
/* const senales = document.querySelector('.lista-senales');
senales.innerHTML =`Señal TV`

const findNumber = () => {
    const numero = prompt('Ingrese el numero del canal: ');
    contacto = canales.filter(contacto => contacto.channel === numero);
    console.log(contacto);

}

findNumber();  */// Buscar contacto por numero

//Total de señales por criticidad
/* const severidad = (sev) => {
    criti = (canales.filter(contacto => contacto.criticidad === (sev)));
    console.log(criti)
    return `Total ${criti.length} señales`;
}
console.log(severidad("1")); */

//Buscar por multicast
/* const findMulticast = (ip) => {
    multicast = (canales.findIndex(contacto => contacto.adsl === ip || contacto.fca === ip || contacto.mpeg4 === ip))
    console.log(`El Id canal es:  ${multicast}`);
    canales[multicast].contacto = {
        nombre: "Jorge",
        fono: "9888888",
    }

}
findMulticast("239.255.3.53"); */

console.log(JSON.stringify(canales))



//***Añadir una propiedad a un canal especifico***//



/* console.log(chann).sort() */

/* const [nombre, channel, adsl, fca, mpeg4, criticidad] = canales; */

/* const senal = canales.map((senal) => senal.nombre).sort()

const chann = (senal.filter(e => e.canales = "Euro"))

console.log(senal) */

/* console.log(senal) */

/* const criti = (canales.filter(e => e.criticidad == "1"));

console.log(criti) */

/* console.log(criti.filter(p => p.channel == "26")) */

/* const num = canales.map((senal) => senal.channel); */


