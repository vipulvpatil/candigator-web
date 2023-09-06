-- CreateUpdateAtFunction
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Candidate updated_at trigger
CREATE TRIGGER update_candidate_updated_at BEFORE UPDATE ON candidates FOR EACH ROW EXECUTE PROCEDURE  update_updated_at_column();

-- FileUpload updated_at trigger
CREATE TRIGGER update_file_upload_updated_at BEFORE UPDATE ON file_uploads FOR EACH ROW EXECUTE PROCEDURE  update_updated_at_column();
