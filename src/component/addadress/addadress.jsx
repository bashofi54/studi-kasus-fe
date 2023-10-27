import React, {useEffect, useState} from "react";
import {create} from "@regions-of-indonesia/client";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from "axios";
import {API_URL} from "../../utils/constant";

const client = create();

function AddAddress({hand}) {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [subdistricts, setSubdistricts] = useState([]);
  const [villages, setVillages] = useState([]);

  const [selectedProvinceCode, setSelectedProvinceCode] = useState("");
  const [selectedDistrictCode, setSelectedDistrictCode] = useState("");
  const [selectedSubdistrictsCode, setSelectedSubdistrictsCode] = useState("");
  const [selectedVillageCode, setSelectedVillageCode] = useState("");
  const [namee, setName] = useState("");
  const [almt, setAlmt] = useState("");

  // TODO Region Start//
  useEffect(() => {
    const effect = async () => {
      try {
        setProvinces(await client.province.find());
      } catch (error) {
        setProvinces([]);
      }
    };

    effect();
  }, []);

  useEffect(() => {
    const effect = async () => {
      setSelectedDistrictCode("");

      try {
        setDistricts(await client.district.find(selectedProvinceCode));
      } catch (error) {
        setDistricts([]);
      }
    };

    effect();
  }, [selectedProvinceCode]);

  useEffect(() => {
    const effect = async () => {
      setSelectedSubdistrictsCode("");

      try {
        setSubdistricts(await client.subdistrict.find(selectedDistrictCode));
      } catch (error) {
        setSubdistricts([]);
      }
    };

    effect();
  }, [selectedDistrictCode]);

  useEffect(() => {
    const effect = async () => {
      setSelectedVillageCode("");

      try {
        setVillages(await client.village.find(selectedSubdistrictsCode));
      } catch (error) {
        setVillages([]);
      }
    };

    effect();
  }, [selectedSubdistrictsCode]);
  // TODO Region End//

  const findProvinceByCode = (code) => {
    try {
      const targetProvince = provinces.find(
        (province) => province.code === code
      );
      if (targetProvince) {
        return targetProvince;
      }
    } catch (error) {
      return null;
    }
  };
  const findDistrictByCode = (code) => {
    try {
      const targeDistrict = districts.find(
        (district) => district.code === code
      );
      if (targeDistrict) {
        return targeDistrict;
      }
    } catch (error) {
      return null;
    }
  };
  const findSubdistrictByCode = (code) => {
    try {
      const targeSubdistrict = subdistricts.find(
        (subdistrict) => subdistrict.code === code
      );
      if (targeSubdistrict) {
        return targeSubdistrict;
      }
    } catch (error) {
      return null;
    }
  };
  const findVillageByCode = (code) => {
    try {
      const targeVillage = villages.find((village) => village.code === code);
      if (targeVillage) {
        return targeVillage;
      }
    } catch (error) {
      return null;
    }
  };

  const targetProvince = findProvinceByCode(selectedProvinceCode);
  const targetDistrict = findDistrictByCode(selectedDistrictCode);
  const targetSubdistric = findSubdistrictByCode(selectedSubdistrictsCode);
  const targetVillage = findVillageByCode(selectedVillageCode);

  // console.log(targetProvince.name);
  // console.log(provinces);
  // console.log(selectedProvinceCode);

  const addaddress = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL + "api/delivery-addresses", {
        nama: namee,
        detail: almt,
        provinsi: targetProvince.name,
        kabupaten: targetDistrict.name,
        kecamatan: targetSubdistric.name,
        kelurahan: targetVillage.name,
      });
      window.location.reload();
      hand();
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      }
    }
  };

  return (
    <div>
      <Container>
        <Form onSubmit={addaddress}>
          <Form.Group as={Col} className="mb-2">
            <Form.Label>Nama</Form.Label>
            <Form.Select
              value={namee}
              onChange={(e) => setName(e.target.value)}>
              <option value={""} disabled selected hidden>
                Pilih Nama Tempat
              </option>
              <option value="rumah">Rumah</option>
              <option value="kantor">Kantor</option>
              <option value="penginapan">Penginapan</option>
              <option value="kosan">Kosan</option>
            </Form.Select>
          </Form.Group>
          <Row>
            <Form.Group as={Col} md="6" className="mb-2">
              <Form.Label>Alamat / Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Isikan Alamat Lengkap RT/RW"
                value={almt}
                onChange={(e) => setAlmt(e.target.value)}
              />
            </Form.Group>
            <Col>
              <Row>
                <Form.Group as={Col} className="mb-2">
                  <Form.Label>Provinsi</Form.Label>
                  <Form.Select
                    value={selectedProvinceCode}
                    onChange={(e) =>
                      setSelectedProvinceCode(e.currentTarget.value)
                    }>
                    <option value={""} disabled selected hidden>
                      - Pilih Provinsi -
                    </option>
                    {provinces.map((region) => (
                      <option key={region.name} value={region.code}>
                        {region.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group>
                  <Form.Label>Kabupaten</Form.Label>
                  <Form.Select
                    value={selectedDistrictCode}
                    onChange={(e) =>
                      setSelectedDistrictCode(e.currentTarget.value)
                    }>
                    <option value={""} disabled selected hidden>
                      - Pilih Kabupaten -
                    </option>
                    {districts.map((region) => (
                      <option key={region.code} value={region.code}>
                        {region.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group>
                  <Form.Label>Kecamatan</Form.Label>
                  <Form.Select
                    value={selectedSubdistrictsCode}
                    onChange={(e) =>
                      setSelectedSubdistrictsCode(e.currentTarget.value)
                    }>
                    <option value={""} disabled selected hidden>
                      - Pilih Kecamatan -
                    </option>
                    {subdistricts.map((region) => (
                      <option key={region.code} value={region.code}>
                        {region.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group>
                  <Form.Label>Kelurahan</Form.Label>
                  <Form.Select
                    value={selectedVillageCode}
                    onChange={(e) =>
                      setSelectedVillageCode(e.currentTarget.value)
                    }>
                    <option value={""} disabled selected hidden>
                      - Pilih Kelurahan -
                    </option>
                    {villages.map((region) => (
                      <option key={region.code} value={region.code}>
                        {region.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Row>
            </Col>
          </Row>
          <Button type="submite" variant="outline-primary">
            Simpan
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddAddress;
