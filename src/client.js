import { createClient } from '@supabase/supabase-js';

const URL = 'https://peumqocphwumgymtretl.supabase.co'
const API_KEY = 'sb_publishable_N-kiVG1rt9iDcZ8LD74NTg_3mVpbDLH';

export const supabase = createClient(URL, API_KEY);