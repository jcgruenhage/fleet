package tables

import (
	"database/sql"
)

func init() {
	MigrationClient.AddMigration(Up_20220908181826, Down_20220908181826)
}

func Up_20220908181826(tx *sql.Tx) error {
	_, err := tx.Exec(`ALTER TABLE hosts ADD COLUMN orbit_node_key VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL;`)
	return err
}

func Down_20220908181826(tx *sql.Tx) error {
	return nil
}
