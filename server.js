// Servidor Express - Projeto #13: Clínica Odontológica
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3013;

app.get('/api/odonto/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 13,
        sistema: "Clínica Odontológica",
        categoria: "Saúde Bucal",
        tabela_conectada: process.env.TABELA_ALVO || "agenda_pacientes",
        parametro_ambiente: process.env.CONSULTORIO_ODONTO || "SORRISO_CLEAN_13",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #13] Clínica Odontológica rodando em http://localhost:${PORT}/api/odonto/status`);
});