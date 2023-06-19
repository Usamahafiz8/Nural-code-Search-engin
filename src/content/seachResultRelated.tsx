export const top100Films =[
  {
    repo: "soimort/you-get",
    path: "src/you_get/extractors/youtube.py",
    func_name: "YouTube.get_vid_from_url",
    original_string: "def get_vid_from_url(url):\n        \"\"\"Extracts video ID from URL.\n        \"\"\"\n        return match1(url, r'youtu\\.be/([^?/]+)') or \\\n          match1(url, r'youtube\\.com/embed/([^/?]+)') or \\\n          match1(url, r'youtube\\.com/v/([^/?]+)') or \\\n          match1(url, r'youtube\\.com/watch/([^/?]+)') or \\\n          parse_query_param(url, 'v') or \\\n          parse_query_param(parse_query_param(url, 'u'), 'v'),"
    ,language: "python",
    code: "def get_vid_from_url(url):\n        \"\"\"Extracts video ID from URL.\n        \"\"\"\n        return match1(url, r'youtu\\.be/([^?/]+)') or \\\n          match1(url, r'youtube\\.com/embed/([^/?]+)') or \\\n          match1(url, r'youtube\\.com/v/([^/?]+)') or \\\n          match1(url, r'youtube\\.com/watch/([^/?]+)') or \\\n          parse_query_param(url, 'v') or \\\n          parse_query_param(parse_query_param(url, 'u'), 'v'),"
    ,code_tokens: "['def', 'get_vid_from_url', '(', 'url', ')', ':', 'return', 'match1', '(', 'url', ',', \"r'youtu\\\\.be/([^?/]+)'\", ')', 'or', 'match1', '(', 'url', ',', \"r'youtube\\\\.com/embed/([^/?]+)'\", ')', 'or', 'match1', '(', 'url', ',', \"r'youtube\\\\.com/v/([^/?]+)'\", ')', 'or', 'match1', '(', 'url', ',', \"r'youtube\\\\.com/watch/([^/?]+)'\", ')', 'or', 'parse_query_param', '(', 'url', ',', \"'v'\", ')', 'or', 'parse_query_param', '(', 'parse_query_param', '(', 'url', ',', \"'u'\", ')', ',', \"'v'\", ')'],"
    ,docstring: "Extracts video ID from URL.",
    docstring_tokens: "['Extracts', 'video', 'ID', 'from', 'URL', '.']",
    sha: "b746ac01c9f39de94cac2d56f665285b0523b974",
    url: "https://github.com/soimort/you-get/blob/b746ac01c9f39de94cac2d56f665285b0523b974/src/you_get/extractors/youtube.py#L135-L143",
    partition: "test"
  },
  {
    repo: "soimort/you-get",
    path: "src/you_get/extractors/miomio.py",
    func_name: "sina_xml_to_url_list",
    original_string: "def sina_xml_to_url_list(xml_data):\n    \"\"\"str->list\n    Convert XML to URL List.\n    From Biligrab.\n    \"\"\"\n    rawurl = []\n    dom = parseString(xml_data)\n    for node in dom.getElementsByTagName('durl'):\n        url = node.getElementsByTagName('url')[0]\n        rawurl.append(url.childNodes[0].data)\n    return rawurl,"
    ,language: "python",
    code: "def sina_xml_to_url_list(xml_data):\n    \"\"\"str->list\n    Convert XML to URL List.\n    From Biligrab.\n    \"\"\"\n    rawurl = []\n    dom = parseString(xml_data)\n    for node in dom.getElementsByTagName('durl'):\n        url = node.getElementsByTagName('url')[0]\n        rawurl.append(url.childNodes[0].data)\n    return rawurl,"
    ,code_tokens: "['def', 'sina_xml_to_url_list', '(', 'xml_data', ')', ':', 'rawurl', '=', '[', ']', 'dom', '=', 'parseString', '(', 'xml_data', ')', 'for', 'node', 'in', 'dom', '.', 'getElementsByTagName', '(', \"'durl'\", ')', ':', 'url', '=', 'node', '.', 'getElementsByTagName', '(', \"'url'\", ')', '[', '0', ']', 'rawurl', '.', 'append', '(', 'url', '.', 'childNodes', '[', '0', ']', '.', 'data', ')', 'return', 'rawurl'],"
    ,docstring: "str->list\n    Convert XML to URL List.\n    From Biligrab."
    ,docstring_tokens: "['str', '-', '>', 'list', 'Convert', 'XML', 'to', 'URL', 'List', '.', 'From', 'Biligrab', '.']",
    sha: "b746ac01c9f39de94cac2d56f665285b0523b974",
    url: "https://github.com/soimort/you-get/blob/b746ac01c9f39de94cac2d56f665285b0523b974/src/you_get/extractors/miomio.py#L41-L51",
    partition: "test"
  },]